import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Icon } from "@iconify/react";
import { Head } from "@inertiajs/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Dashboard from "../Dashboard";
import { Inertia } from "@inertiajs/inertia";
import PhotoSlider from "@/Components/PhotoSlider";

export default function Tovar({ auth, tovar }) {
    const [cartActive, setCartActive] = useState(false);
    const [productCount, setProductCount] = useState(1);
    const [productPrice, setProductPrice] = useState(tovar.price);

    async function fetchData() {
        const response = await axios
            .get("/api/cart/" + auth.user.id)
            .then((response) => {
                return response.data.products;
            });
        const products = response.filter((element) => {
            return element.product_id == tovar.id;
        });
        setCartActive(products.length != 0);
        if (products.length != 0) {
            setProductCount(products[0].product_count);
            setProductPrice(
                (products[0].product_count * tovar.price).toFixed(2)
            );
        }
    }
    useEffect(() => {
        fetchData();
    }, []);

    async function order(e) {
        e.preventDefault();

        Date.prototype.addDays = function (days) {
            var currentDate = new Date(this.valueOf());
            currentDate.setDate(currentDate.getDate() + days);
            return currentDate;
        };

        var currentDate = new Date();

        const date =
            currentDate.addDays(5).toISOString().split("T")[0] +
            " " +
            currentDate.toISOString().split("T")[1].slice(0, 8);

        const data = {
            client_id: auth.user.id,
            total_price: productPrice,
            status: "Очікує підтвердження",
            arrival: date,
            products: JSON.stringify([
                {
                    product_id: tovar.id,
                    product_count: productCount,
                    product_price: productPrice,
                },
            ]),
        };

        fetch("/api/orders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then(() => {
                window.location.replace(route("dashboard"));
            })
            .catch((error) => console.log(error));
    }

    async function addToCart(e, value) {
        e.preventDefault();
        if (cartActive == true) {
            await axios({
                method: "DELETE",
                url: "/api/cart/" + auth.user.id + "/" + tovar.id,
            });
            fetchData();
        }
        if (value == 0 && cartActive == false) {
            await axios({
                method: "POST",
                url: "/api/cart",
                data: {
                    client_id: auth.user.id,
                    product_id: tovar.id,
                    product_count: productCount,
                    product_price: productPrice,
                },
            });
            fetchData();
        } else if (value > 0) {
            const count = value == 1 ? productCount - 1 : productCount + 1;

            if (count >= 1 && count <= tovar.property2) {
                setProductCount(count);
                setProductPrice((count * tovar.price).toFixed(2));
            }
        }
    }

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

            <div className="py-12 grid gap-6 xl:flex xl:gap-0">
                <div className="xl:max-w-3xl w-full sm:px-9s lg:px-8">
                    <div className="flex max-md:flex-col-reverse justify-between bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg text-gray-900 dark:text-gray-100">
                        <div className="p-6 w-full">
                            <div className="p-6 font-bold text-2xl">
                                {tovar.name}
                            </div>
                            <div className="mt-3 ml-5 text-xl font-medium">
                                Ціна: ${tovar.price}
                            </div>
                            <div className="ml-5 text-xl font-medium hidden">
                                Тип: {tovar.property1}
                            </div>
                            <div className="ml-5 text-xl font-medium">
                                Кількість: {tovar.property2}
                            </div>
                            <div className="grid gap-3 mt-5 ml-5">
                                <InputLabel
                                    className="text-xl"
                                    for="productCount"
                                    value="Замовити:"
                                />
                                <div className="flex gap-3 items-center">
                                    <span className="font-bold text-2xl">
                                        {productCount}
                                    </span>
                                    <button
                                        onClick={(e) => addToCart(e, 1)}
                                        className="grid content-center justify-center aspect-square px-2 h-full
                                        rounded-md text-gray-200 border bg-gray-600 dark:bg-gray-700
                                        hover:bg-gray-500 dark:hover:bg-gray-600 border-gray-600"
                                    >
                                        <span className="text-base">
                                            <Icon
                                                icon="mdi:minus"
                                                height={24}
                                                width={24}
                                            />
                                        </span>
                                    </button>
                                    <button
                                        onClick={(e) => addToCart(e, 2)}
                                        className="grid content-center justify-center aspect-square px-2 h-full
                                        rounded-md text-gray-200 border bg-gray-600 dark:bg-gray-700
                                        hover:bg-gray-500 dark:hover:bg-gray-600 border-gray-600"
                                    >
                                        <span className="text-base">
                                            <Icon
                                                icon="mdi:plus"
                                                height={24}
                                                width={24}
                                            />
                                        </span>
                                    </button>
                                </div>
                                <span className="font-bold text-2xl">
                                    Остаточна ціна: {productPrice}
                                </span>
                                <div className="flex items-stretch gap-3">
                                    <PrimaryButton onClick={order}>
                                        <span className="text-[0.9rem]">
                                            Замовити зараз
                                        </span>
                                    </PrimaryButton>
                                    <button
                                        onClick={(e) => addToCart(e, 0)}
                                        className={
                                            "grid content-center justify-center aspect-square px-2 mx-2 h-full rounded-md text-gray-200 border" +
                                            (cartActive === true
                                                ? "bg-green-600 dark:bg-green-700 hover:bg-green-500 dark:hover:bg-green-600 border-green-600"
                                                : "bg-orange-600 dark:bg-orange-700 hover:bg-orange-500 dark:hover:bg-orange-600 border-orange-600")
                                        }
                                    >
                                        <span className="text-base xl:p-2">
                                            <Icon
                                                icon={
                                                    cartActive === true
                                                        ? "mdi:done"
                                                        : "mdi:cart"
                                                }
                                                height={24}
                                                width={24}
                                            />
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:max-w-6xl w-full sm:px-9s lg:px-8">
                    <div className="flex max-md:flex-col-reverse justify-between bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg text-gray-900 dark:text-gray-100">
                        <div className="p-6 w-full">
                            {tovar.photo_path ? (
                                <PhotoSlider photos={JSON.parse(tovar.photo_path)} />
                            ) : (
                                <img
                                    src="/img/gps.png"
                                    alt="123."
                                    class="h-full w-full aspect-square md:h-96 object-contain object-center lg:h-[36rem]"
                                />
                            )}
                            <span className="font-semibold text-lg">Опис</span>
                            <br />
                            <span className="whitespace-pre-wrap">
                                {tovar.body}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
