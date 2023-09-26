import React from "react";
import { InfoLabel } from "../../InfoLabel";

export const BasicInfoProfile = (): React.JSX.Element => {
  return (
    <div className="flex flex-col gap-6">
      <InfoLabel
        title="Full Name"
        info="Nathalia de Paula Ferreira da Silva"
        w="w-[70%]"
      />
      <section className="flex gap-8">
        <InfoLabel title="Email" info="nathalia.paula@stx" w="w-1/2" />
        <InfoLabel title="Personal Phone" info="(32) 39527-7690" w="w-1/2" />
      </section>
      <section className="flex gap-8">
        <InfoLabel title="Birth Date" info="30/08/20008" w="w-1/2" />
        <InfoLabel title="Full Name" info="John Doe" w="w-1/2" />
      </section>
      <InfoLabel
        title="Address"
        info="Rua Eugênio Montreuil - 286 Casa 2"
        w="full"
      />
      <section className="flex gap-8">
        <InfoLabel title="State" info="Minas Gerais" w="w-1/2" />
        <InfoLabel title="City" info="Juiz de Fora" w="w-1/2" />
      </section>
    </div>
  );
};
