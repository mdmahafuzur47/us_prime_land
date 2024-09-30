import CommonHeader from "@/components/ui/CommonHeader";
import Container from "@/components/ui/Container";
import React from "react";

export default function ClientSays() {
  return (
    <Container className="mt-20 flex flex-col justify-center items-center">
      <CommonHeader title="Why Choose Us" />
      <h1 className="text-3xl md:text-4xl mb-10 mt-3 font-semibold">
        What My Client Says
      </h1>
    </Container>
  );
}
