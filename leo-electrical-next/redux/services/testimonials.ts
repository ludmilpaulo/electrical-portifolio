import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type Testimonial = {
  id: number;
  author: string;
  quote: string;
  rating: number;
  created: string;
  updated: string;
};

export type NewTestimonial = {
  author: string;
  quote: string;
  rating: number; // 1..5
};

const API_BASE = process.env.NEXT_PUBLIC_API_BASE ?? "http://localhost:8000";

export const testimonialsApi = createApi({
  reducerPath: "testimonialsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_BASE}/api/create`,
    // If you need credentials/cookies add: credentials: "include",
  }),
  tagTypes: ["Testimonials"],
  endpoints: (build) => ({
    listTestimonials: build.query<Testimonial[], void>({
      query: () => `testimonials/`,
      providesTags: (result) =>
        result
          ? [
              ...result.map((t) => ({ type: "Testimonials" as const, id: t.id })),
              { type: "Testimonials" as const, id: "LIST" },
            ]
          : [{ type: "Testimonials" as const, id: "LIST" }],
    }),

    createTestimonial: build.mutation<Testimonial, NewTestimonial>({
      query: (body) => ({
        url: `testimonials/`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body,
      }),
      // Optimistic update: append to cache immediately
      async onQueryStarted(newItem, { dispatch, queryFulfilled }) {
        const patch = dispatch(
          testimonialsApi.util.updateQueryData("listTestimonials", undefined, (draft) => {
            const temp: Testimonial = {
              id: -Date.now(), // temporary id
              author: newItem.author,
              quote: newItem.quote,
              rating: newItem.rating,
              created: new Date().toISOString(),
              updated: new Date().toISOString(),
            };
            draft.unshift(temp);
          })
        );
        try {
          const { data: created } = await queryFulfilled;
          // replace temp with real server item
          dispatch(
            testimonialsApi.util.updateQueryData("listTestimonials", undefined, (draft) => {
              const idx = draft.findIndex((d) => d.id < 0);
              if (idx !== -1) draft[idx] = created;
            })
          );
        } catch {
          patch.undo();
        }
      },
      invalidatesTags: [{ type: "Testimonials", id: "LIST" }],
    }),
  }),
});

export const { useListTestimonialsQuery, useCreateTestimonialMutation } = testimonialsApi;
