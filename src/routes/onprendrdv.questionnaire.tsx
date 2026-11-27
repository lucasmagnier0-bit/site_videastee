import { createFileRoute, redirect } from "@tanstack/react-router";

// Ancienne adresse : on renvoie simplement vers la prise de rendez-vous
// pour que les anciens liens déjà envoyés continuent de fonctionner.
export const Route = createFileRoute("/onprendrdv/questionnaire")({
  beforeLoad: () => {
    throw redirect({ to: "/onprendrdv" });
  },
});
