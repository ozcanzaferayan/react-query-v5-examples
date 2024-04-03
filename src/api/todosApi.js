import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com";

export function useTodos() {
  return useQuery({
    queryKey: ["todos"],
    queryFn: () => axios.get(`${API_URL}/todos`),
    gcTime: 1000 * 60 * 60, // 1 hour
  });
}

export function useTodoAddMutation() {
  return useMutation({
    mutationFn: (todo) => axios.post(`${API_URL}/todos`, todo),
  });
}

export function useTodoDeleteMutation() {
  return useMutation({
    mutationFn: (id) => axios.delete(`${API_URL}/todos/${id}`),
  });
}

export function useTodoUpdateMutation() {
  return useMutation({
    mutationFn: (todo) => axios.put(`${API_URL}/todos/${todo.id}`, todo),
  });
}
