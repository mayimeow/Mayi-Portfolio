import { supabase } from "../lib/supabaseClient";
import ProjectsClient from "./ProjectsClient";

export default async function Projects() {
  var result = await supabase
    .from("projects")
    .select("*")
    .order("sort_order", { ascending: true });

  var projects = result.data || [];
  var error = result.error;

  return <ProjectsClient projects={projects} error={error ? error.message : null} />;
}
