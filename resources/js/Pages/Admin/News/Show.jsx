import PhotoSlider from "@/Components/PhotoSlider";
import AuthenticatedLayout from "@/Layouts/Admin/AdminLayout";
import { Head } from "@inertiajs/react";

export default function Show({ auth, news }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Інформація про товар
                </h2>
            }
        >
            <Head title="Інформація про товар" />

            <div className="py-12">
                <div className="max-w-5xl ml-20 sm:px-9s lg:px-8">
                    <div className="grid bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg pb-8 text-gray-900 dark:text-gray-100">
                        <div className="p-6 font-bold text-2xl">
                            Назва : {news.name}
                        </div>
                        <div className="p-6 font-bold text-2xl">
                            Фото :
                            {news.photo_path ? (
                                <PhotoSlider
                                    photos={JSON.parse(news.photo_path)}
                                />
                            ) : (
                                <></>
                            )}
                        </div>
                        <span className="ml-5 text-xl font-medium">
                            Посилання:
                            <a href={"/products/" + news.slug}>
                                {' ' + news.slug}
                            </a>
                        </span>
                        <span className="ml-5 text-xl font-medium">
                            Текст: {news.body}
                        </span>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
