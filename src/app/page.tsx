import { Card, CardBody } from "@nextui-org/react";

import { ThemeSwitcher } from "@/components/theme-switcher";

export default async function Home() {
  return (
    <Card className="mx-auto mt-4 max-w-md">
      <CardBody className="flex flex-col items-center">
        <h1 className="text-5xl">Next.js Starter</h1>
        <p className="mb-10 text-xl">A simple starter for Next.js</p>
        <ThemeSwitcher />
      </CardBody>
    </Card>
  );
}
