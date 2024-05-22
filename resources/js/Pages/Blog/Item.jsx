import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Icon } from "@iconify/react";
import { Head } from "@inertiajs/react";
import PhotoSlider from "@/Components/PhotoSlider";

export default function Item({ auth, blog }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    {blog.name}
                </h2>
            }
        >
            <Head title={blog.name} />

            <div className="py-12 grid gap-6 xl:flex xl:gap-0 justify-center">
                <div className="xl:max-w-7xl w-full sm:px-9s lg:px-8">
                    <div className="grid justify-between bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg text-gray-900 dark:text-gray-100">
                        <div className="p-6 w-full">
                            {blog.photo_path ? (
                                <PhotoSlider
                                    photos={JSON.parse(blog.photo_path)}
                                />
                            ) : (
                                <img
                                    src="/img/gps.png"
                                    alt="123."
                                    class="h-full w-full aspect-square md:h-96 object-contain object-center lg:h-[36rem]"
                                />
                            )}
                        </div>
                        <span className="p-12 font-medium text-lg whitespace-pre-wrap">
                            {blog.body}
                        </span>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
