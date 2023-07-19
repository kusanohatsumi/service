'use client'
import styled from "styled-components";
import Image from 'next/image';

const circle = styled.div`
    //丸いアイコン
    display: flex;  
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #8AD8D4;
`;

const S_Circle = styled.div`
    //小さい丸い形
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: red; 
`;

const M_Circle = styled.div`
    //小さい丸い形
    display: flex;
    justify-content: center;
    align-items: center;
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background-color: #D9D9D9; 
`;

const Small_square = styled.div`
    //小さい四角形
    width: 35px;
    height: 35px;
    background-color: #8AD8D4;
`;

const Font = styled.p`
    //文字
    height: 30px;
    font-size: 16px;
    font-weight: bold;
    color: #C8C8C8;
`;


export default function Icon_size() {
    return (
        <>
            <h1>テストicon</h1>
            <circle></circle>
            <M_Circle></M_Circle>
            <Small_square></Small_square>
            <a>
                <Image
                    src="/+.svg"
                    alt="magn glassifying"
                    width={52}
                    height={52}
                />
                <Font>新規作成</Font>
            </a>



            <a>
                <S_Circle>
                    <Image
                        src="/+.svg"
                        alt="magn glassifying"
                        width={52}
                        height={52}
                    />
                </S_Circle>

                <M_Circle></M_Circle>
            </a>
        </>
    );
}