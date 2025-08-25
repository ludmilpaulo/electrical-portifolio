
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://127.0.0.1:8000";

export const api = createApi({
  reducerPath: "leoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ["Lead", "Service", "Project", "Testimonial"],
  endpoints: (builder) => ({
    getServices: builder.query<any[], void>({
      query: () => "/api/services/",
      providesTags: ["Service"]
    }),
    getProjects: builder.query<any[], void>({
      query: () => "/api/projects/",
      providesTags: ["Project"]
    }),
    getTestimonials: builder.query<any[], void>({
      query: () => "/api/testimonials/",
      providesTags: ["Testimonial"]
    }),
    createLead: builder.mutation<any, any>({
      query: (payload) => ({
        url: "/api/leads/",
        method: "POST",
        body: payload
      }),
      invalidatesTags: ["Lead"]
    })
  })
});

export const {
  useGetServicesQuery,
  useGetProjectsQuery,
  useGetTestimonialsQuery,
  useCreateLeadMutation
} = api;
