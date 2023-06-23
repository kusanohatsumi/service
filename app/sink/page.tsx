'use client'
import Form from "@/ui/form";
import FlexCenter from "@/ui/center";
import styled from "styled-components";

const Center = styled.div`
<div className="top1"></div>
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const redfont = styled.div`
  color: red;
`;


export default function sink() {
  return (
    <>
      <div className="cursor-pointer">
        <Form></Form>
      </div>

    </>
  );
}
