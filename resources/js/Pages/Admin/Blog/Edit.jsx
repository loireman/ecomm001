import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/Admin/AdminLayout";
import { Head, useForm } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";
import FileInputDropdown from "@/Components/FileInputDropdown";
import { useState } from "react";

export default function EditTovary({ auth, blog }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: blog.name,
        slug: blog.slug,
        body: blog.body,
        photo_path: blog.photo_path ? JSON.parse(blog.photo_path) : [],
    });

    const submit = async (e) => {
        e.preventDefault();

        const photos = [];

        // Map each item in data.photo_path to a Promise
        const promises = data.photo_path.map(async (fileOrPath) => {
            if (typeof fileOrPath === "string") {
                // If it's a string, push it directly
                photos.push(fileOrPath);
            } else {
                try {
                    // If it's a file, upload it and push the uploaded path
                    const uploadedPath = await uploadFile(fileOrPath);
                    photos.push(uploadedPath);
                } catch (error) {
                    console.error("Failed to upload file:", error);
                    // Handle error if needed
                }
            }
        });

        // Wait for all promises to resolve
        await Promise.all(promises);

        // After all asynchronous operations are completed, proceed with the Inertia.put call
        Inertia.put(route("blogs.update", { blog: blog }), {
            name: data.name,
            slug: data.slug,
            body: data.body,
            photo_path: JSON.stringify(photos),
        });
    };

    const uploadFile = async (file) => {
        try {
            const formData = new FormData();
            formData.append("file", file);

            const response = await axios.post("/api/upload-file", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            return await response.data.path;
        } catch (error) {
            console.error("File upload failed:", error);
            throw error;
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Оновлення блогу
                </h2>
            }
        >
            <Head title="Оновлення блогу" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg p-4 text-gray-800 dark:text-gray-300">
                        <span className="text-xl font-semibold">
                            Оновити блог
                        </span>
                        <form className="px-4 py-8" onSubmit={submit}>
                            <InputLabel
                                htmlFor="filedropdown"
                                value="Додати фото"
                            />
                            <FileInputDropdown
                                selectedFiles={data.photo_path}
                                setSelectedFiles={(e) =>
                                    setData("photo_path", e)
                                }
                            />
                            <InputLabel htmlFor="name" value="Назва" />
                            <TextInput
                                id="name"
                                name="name"
                                value={data.name}
                                className="mt-1 block w-full"
                                autoComplete="name"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                required
                            />
                            <InputError
                                message={errors.name}
                                className="mt-2"
                            />
                            <InputLabel htmlFor="slug" value="Посилання" />
                            <TextInput
                                id="slug"
                                name="slug"
                                value={data.slug}
                                className="mt-1 block w-full"
                                autoComplete="off"
                                isFocused={false}
                                onChange={(e) =>
                                    setData("slug", e.target.value)
                                }
                                required
                            />
                            <InputError
                                message={errors.slug}
                                className="mt-2"
                            />

                            <InputLabel htmlFor="body" value="Опис" />
                            <textarea
                                id="body"
                                name="body"
                                value={data.body}
                                className="mt-1 block w-full h-96 rounded-lg bg-gray-200 dark:bg-gray-900"
                                autoComplete="off"
                                onChange={(e) =>
                                    setData("body", e.target.value)
                                }
                                required
                            />
                            <InputError
                                message={errors.body}
                                className="mt-2"
                            />

                            <PrimaryButton
                                className="mt-16 w-full grid"
                                disabled={processing}
                            >
                                <span className="text-[1rem]">Оновити</span>
                            </PrimaryButton>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
