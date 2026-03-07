// src/services/api.ts
export interface ContactData {
  name: string;
  email: string;
  message: string;
}

export interface Project {
  id: string;
  name: string;
  from?: string;
  to?: string;
  city?: string;
}

// Base URL of your backend
const BASE_URL = "http://localhost:8080/api";

// Contact form
export async function submitContact(data: ContactData) {
  const res = await fetch(`${BASE_URL}/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
}

// Fetch Flights
export async function getFlights(): Promise<Project[]> {
  const res = await fetch(`${BASE_URL}/flights`);
  return res.json();
}

// Fetch Hotels
export async function getHotels(): Promise<Project[]> {
  const res = await fetch(`${BASE_URL}/hotels`);
  return res.json();
}

// Fetch Cabs
export async function getCabs(): Promise<Project[]> {
  const res = await fetch(`${BASE_URL}/cabs`);
  return res.json();
}