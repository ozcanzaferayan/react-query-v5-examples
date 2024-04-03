import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const API_URL = "http://localhost:3000";

export function useUsers() {
  return useQuery({
    queryKey: ["users"],
    queryFn: () => axios.get(`${API_URL}/users`),
    gcTime: 1000 * 60 * 60, // 1 hour
  });
}

export function useUserAddMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (user) => axios.post(`${API_URL}/users`, user),
    onSuccess: () => {
      // Hepsini invalidate etmek için,
      // Bu kullanımda todos ve users'ı invalidate etmiş olur
      // queryClient.invalidateQueries();

      // Sadece users'ı invalidate etmek için
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },
  });
}

export function useUserDeleteMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => axios.delete(`${API_URL}/users/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },
  });
}

export function useUserUpdateMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (user) => axios.put(`${API_URL}/users/${user.id}`, user),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },
  });
}
