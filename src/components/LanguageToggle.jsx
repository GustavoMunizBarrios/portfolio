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
            <div class="w-[12rem] h-[3rem] ml-[2.5rem] flex text-center content-center items-center rounded-full">
                <div
                    class="w-full h-[3rem] flex rounded-full items-center content-center"
                >
                    <div
                        class="relative w-full rounded-full h-[3rem] p-1 b-[1px] flex"
                    >
                        <div class="relative w-full h-full flex items-center">
                            <div class='flex w-[8rem] justify-center cursor-pointer pl-2'
                                onClick={handleLanguageEN}>

                                <button
                                    class={`mr-2 text-[1rem] z-50 ${!$isLanguageToggle ? 'text-[#7f858f]' : 'null'}`}
                                >EN</button>
                                <img
                                    class={`${$isLanguageToggle ? 'null' : 'opacity-50'}`}
                                    width="26"
                                    height="26"
                                    src="https://img.icons8.com/color/48/great-britain-circular.png"
                                    alt="great-britain-circular"
                                />
                            </div>
                            <div class="flex w-[8rem] justify-center cursor-pointer pr-2"
                                onClick={handleLanguageES}>
                                <button
                                    class={`mr-2 text-[1rem] z-50 ${$isLanguageToggle ? 'text-[#7f858f]' : 'null'}`}
                                >ES</button>
                                <img
                                    class={`${$isLanguageToggle ? 'opacity-50' : 'null'}`}
                                    width="26"
                                    height="26"
                                    src="https://img.icons8.com/color/48/spain2-circular.png"
                                    alt="spain2-circular"
                                />
                            </div>
                        </div>

                        <span
                            class={`border border-gray-200 shadow flex items-center justify-center w-[50%] rounded-full h-[2.3rem] top-[5px]  absolute -z-[12] ${$isLanguageToggle ? 'left-[7px]' : 'right-[7px]'}`}
                        ></span>

                    </div >
                </div >
            </div >

        </>
    )
}
