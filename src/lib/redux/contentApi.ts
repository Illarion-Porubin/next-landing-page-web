
import { IAddPicture, IDeletePicture, IUpdatePicture, IUpdateService, IUpdateText, IUpdateUser } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"


export const contentApi = createApi({
    reducerPath: 'contentApi',
    tagTypes: ['Content'],
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/" }),
    endpoints: (build) => ({
        getContent: build.query({
            query: () => `project`,
            providesTags: (result) =>
                result
                    ? [
                        ...result['main'].map((id: string) => ({ type: 'Content' as const, id })),
                        { type: 'Content', id: 'LIST' },
                    ]
                    : [{ type: 'Content', id: 'LIST' }],
        }),
        updatePicture: build.mutation({
            query: (body: IUpdatePicture) => ({
                url: 'project',
                method: 'PUT',
                body,
            }),
            invalidatesTags: [{ type: "Content", id: "LIST" }]
        }),
        addPicture: build.mutation({
            query: (body: IAddPicture) => ({
                url: `project`,
                method: "POST",
                body
            }),
            invalidatesTags: [{ type: "Content", id: "LIST" }]
        }),
        deletePicture: build.mutation({
            query: (body: IDeletePicture) => ({
                url: `project`,
                method: "PUT",
                body,
            }),
            invalidatesTags: [{ type: "Content", id: "LIST" }]
        }),
        updateText: build.mutation({
            query: (body: IUpdateText) => ({
                url: `project`,
                method: "PUT",
                body,
            }),
            invalidatesTags: [{ type: "Content", id: "LIST" }]
        }),
        updateService: build.mutation({
            query: (body: IUpdateService) => ({
                url: `project`,
                method: "PUT",
                body,
            })
        }),
        updateUser: build.mutation({
            query: (body: IUpdateUser) => ({
                url: `project`,
                method: "PUT",
                body,
            }),
            invalidatesTags: [{ type: "Content", id: "LIST" }]
        })
    }),
})


export const {
    useGetContentQuery,
    useUpdatePictureMutation,
    useAddPictureMutation,
    useDeletePictureMutation,
    useUpdateTextMutation,
    useUpdateUserMutation,
    useUpdateServiceMutation,
} = contentApi;