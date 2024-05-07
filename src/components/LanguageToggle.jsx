import { useStore } from '@nanostores/react';
import { atom } from 'nanostores';
export const isLanguageToggle = atom(true);

export default function LanguageToggle() {

    const $isLanguageToggle = useStore(isLanguageToggle)

    const handleLanguageEN = () => {
        isLanguageToggle.set(true)
        console.log(`Estado true EN: ${$isLanguageToggle}`);
    }
    const handleLanguageES = () => {
        isLanguageToggle.set(false)
        console.log(`Estado false ES: ${$isLanguageToggle}`);
    }

    return (
        <>
            <div class="w-[13rem] h-[3rem] ml-[2.5rem] flex text-center content-center items-center rounded-full">
                <div
                    class="w-full h-[3rem] flex rounded-full items-center content-center"
                >
                    <div
                        class="relative w-full rounded-full border h-[3rem] p-1 b-[1px] flex"
                    >
                        <div class="relative w-full h-full flex items-center">
                            <div class='flex w-[9rem] justify-center'>

                                <button
                                    class={`mr-3 text-[1rem] z-50 ${!$isLanguageToggle ? 'text-[#7f858f]' : 'null'}`}
                                    onClick={handleLanguageEN}>EN</button>
                                <img
                                    width="26"
                                    height="26"
                                    src="https://img.icons8.com/color/48/great-britain-circular.png"
                                    alt="great-britain-circular"
                                />
                            </div>
                            <div class="flex w-[9rem] justify-center">
                                <button
                                    class={`mr-3 text-[1rem] z-50 ${$isLanguageToggle ? 'text-[#7f858f]' : 'null'}`}
                                    onClick={handleLanguageES} >ES</button>
                                <img
                                    width="26"
                                    height="26"
                                    src="https://img.icons8.com/color/48/spain2-circular.png"
                                    alt="spain2-circular"
                                />
                            </div>
                        </div>

                        <span
                            class="bg-white shadow flex items-center justify-center w-[50%] rounded-full h-[2rem] top-[7px] left-[7px] absolute -z-[12]"
                        ></span>
                    </div >
                </div >
            </div >

        </>
    )
}
