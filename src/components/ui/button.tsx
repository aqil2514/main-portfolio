"use client";
import yuhomyan from "./modules/button/yuhomyan.module.css";

/**
 * Style template yang saya gunakan.
 * - default = Ini adalah template button buatan saya sendiri.
 * - yuhomyan = Ini adalah template button yang dibuat oleh yuhomyan. Lihat lebih lanjut di sini https://codepen.io/yuhomyan/pen/OJMejWJ
 */
type StyleTemplate = "default" | "yuhomyan";

/** Interface untuk buttonnya. Mewarisi semua atribute dari HTML Button */
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    styleTemplate : StyleTemplate;
}

export default function Button({styleTemplate}:ButtonProps){
    console.log(yuhomyan)
    return(
        <p>test</p>
    )
}