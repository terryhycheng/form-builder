'use server';

export async function createRecord(id: string, formData: FormData) {
    const data = { ...Object.fromEntries(formData.entries()), userId: id };
    console.log(data);
}
