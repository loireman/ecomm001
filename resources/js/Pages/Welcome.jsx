import { Link, Head } from "@inertiajs/react";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Welcome" />
            <div className="relative pt-28 pb-20 max-lg:flex-col-reverse flex lg:justify-center lg:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                <div className="absolute top-4 left-4">
                    <div className="flex items-center space-x-4 px-4 py-2">
                        {auth.user ? (
                            <Link
                                href={route("dashboard")}
                                className="font-bold text-white hover:text-red-500 dark:text-white dark:hover:text-blue-500"
                            >
                                Логін
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route("login")}
                                    className="font-bold text-white hover:text-red-500 dark:text-white dark:hover:text-blue-500"
                                >
                                    Логін
                                </Link>
                                <Link
                                    href={route("register")}
                                    className="font-bold text-white hover:text-red-500 dark:text-white dark:hover:text-blue-500"
                                >
                                    Реєстрація
                                </Link>
                            </>
                        )}
                    </div>
                    <div className="flex items-center space-x-4 px-4 py-2">
                        <Link
                            href="/products"
                            className="font-bold text-black dark:text-white hover:text-red-500 dark:hover:text-blue-500"
                        >
                            Продукція
                        </Link>
                        <Link
                            href="/news"
                            className="font-bold text-black dark:text-white hover:text-red-500 dark:hover:text-blue-500"
                        >
                            Новини
                        </Link>
                        <Link
                            href="/blog"
                            className="font-bold text-black dark:text-white hover:text-red-500 dark:hover:text-blue-500"
                        >
                            Блог
                        </Link>
                        <Link
                            href="/dashboard"
                            className="font-bold text-black dark:text-white hover:text-red-500 dark:hover:text-blue-500"
                        >
                            Головна
                        </Link>
                    </div>
                </div>

                <div className="container">
                    <div className="offer mt-[-30] text-black dark:text-white">
                        <h1 className="font-bold text-4xl mt-5 ml-10">
                            Вітаю!
                        </h1>
                        <div className="lg:max-w-2xl font-bold text-xl mt-2 ml-10">
                            <p>
                                Інформаційно-пошуковий WEB-портал з маркетингу
                                та реалізації GPS обладнання.
                            </p>
                        </div>
                        <div className="lg:max-w-2xl w-[calc(100% - 48rem)] font-normal text-xl mt-4 ml-10">
                            <p>
                                Це сучасний інструмент, який дозволяє
                                користувачам легко знаходити та придбавати
                                необхідне обладнання. Він надає детальний опис
                                продуктів, включаючи їх характеристики, ціни та
                                відгуки клієнтів. Також портал може містити
                                інформацію про останні тенденції в галузі GPS
                                технологій, поради щодо вибору обладнання та
                                аналітику ринку.
                            </p>
                        </div>
                        <div className="mt-5 ml-10">
                            <a
                                href="/products"
                                className="btn bg-red-700 hover:bg-red-800 dark:bg-blue-500  dark:hover:bg-blue-600 text-white py-4 px-8 inline-block uppercase font-bold rounded-lg"
                            >
                                Замовити
                            </a>
                        </div>
                    </div>
                    
                </div>
                <div className="h-full max-lg:w-full grid align-content-center">
                    <img
                        src="/img/gps.png"
                        alt="background"
                        className="max-lg:max-h-80 h-full w-full object-contain"
                    />
                </div>
            </div>
        </>
    );
}
