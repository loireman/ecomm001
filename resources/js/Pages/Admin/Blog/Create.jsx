import FileInputDropdown from "@/Components/FileInputDropdown";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/Admin/AdminLayout";
import { Head, useForm } from "@inertiajs/react";
import { useState } from "react";

export default function CreateBlog({ auth }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        slug: "",
        body: "",
        photo_path: [],
    });


    const submit = (e) => {
        e.preventDefault();

        post(route("blogs.store"), {
            onSuccess: () => {
                reset();
            },
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Створення блогу
                </h2>
            }
        >
            <Head title="Створення блогу" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg p-4 text-gray-800 dark:text-gray-300">
                        <span className="text-xl font-semibold">
                            Створити блог
                        </span>
                        <form className="px-4 py-8" onSubmit={submit}>
                            <InputLabel
                                htmlFor="filedropdown"
                                value="Додати фото"
                            />
                            <FileInputDropdown selectedFiles={data.photo_path} setSelectedFiles={(e) => setData("photo_path", e)} />
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
                                <span className="text-[1rem]">Створити</span>
                            </PrimaryButton>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
