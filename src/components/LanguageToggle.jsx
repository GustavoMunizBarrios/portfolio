
import { atom } from 'nanostores';
const selected = atom(true);

export default function LanguageToggle() {
    return (
        <>
            <div class="w-full max-w-sm flex flex-col mx-auto text-center">
                <div
                    x-data="{ selected: true }"
                    class="w-full bg-white h-auto m-auto shadow flex flex-col p-8 pt-6 rounded-xl"
                >
                    <div
                        class="relative w-full mt-4 rounded-md border h-10 p-1 bg-gray-200"
                    >
                        <div class="relative w-full h-full flex items-center">
                            <div>
                                <button class="mr-3">EN</button>
                                <img
                                    width="36"
                                    height="36"
                                    src="https://img.icons8.com/color/48/great-britain-circular.png"
                                    alt="great-britain-circular"
                                />
                            </div>
                            <div class="w-full flex justify-center text-gray-400 cursor-pointer"    >
                                <button class="mr-3">ES</button>
                                <img
                                    width="36"
                                    height="36"
                                    src="https://img.icons8.com/color/48/spain2-circular.png"
                                    alt="spain2-circular"
                                />
                            </div>
                        </div>

                        <span
                            class="bg-white shadow text-sm flex items-center justify-center w-1/2 rounded h-[1.88rem] transition-all duration-150 ease-linear top-[4px] absolute"
                        ></span>
                    </div >
                </div >
            </div >

        </>
    )
}
