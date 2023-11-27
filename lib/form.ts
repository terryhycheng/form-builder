import { DeleteForm } from "@/actions/form";
import { redirect } from "next/navigation";

export const handleFormDelete = async (id: string) => {
  try {
    const form = await DeleteForm(id);
    console.log(`Deleted ${form.name} Form`)
    // TODO: Add toast here
    redirect('/dashboard')
  } catch (error) {
      console.log('ERROR', error)
      // TODO: Add toast here
  }
}