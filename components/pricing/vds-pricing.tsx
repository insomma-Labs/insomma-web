import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { vdsPlans } from "@/data/vps/vds.plans";

export default function VdsPricing() {
  return (
    <section className="bg-white rounded-lg shadow-sm border p-4 md:p-8">
      <header className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Virtual Dedicated Servers
        </h2>
        <p className="text-gray-600">
          High performance virtual machines with dedicated resources provisioned
          in minutes.
        </p>
      </header>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-4 px-4 font-semibold text-gray-900">
                Plan
              </th>
              <th className="text-left py-4 px-4 font-semibold text-gray-900">
                CPU
              </th>
              <th className="text-left py-4 px-4 font-semibold text-gray-900">
                RAM
              </th>
              <th className="text-left py-4 px-4 font-semibold text-gray-900">
                Storage
              </th>
              <th className="text-left py-4 px-4 font-semibold text-gray-900">
                Data Transfer
              </th>
              <th className="text-left py-4 px-4 font-semibold text-gray-900">
                Price
                <span className="block text-xs font-normal text-gray-500">
                  including 22% VAT
                </span>
              </th>
              <th className="py-4 px-4" aria-hidden="true"></th>
            </tr>
          </thead>
          <tbody>
            {vdsPlans.map((plan) => (
              <tr key={plan.id} className="border-b">
                <td className="py-6 px-4">
                  <strong className="font-semibold text-gray-900 block">
                    {plan.name}
                  </strong>
                </td>
                <td className="py-6 px-4 text-gray-700">{plan.CpuCores} CPU</td>
                <td className="py-6 px-4 text-gray-700">{plan.ram} RAM</td>
                <td className="py-6 px-4 text-gray-700">
                  <div>{plan.storage.split(" o ")[0]}</div>
                  <span className="text-sm text-gray-500">or request more</span>
                </td>
                <td className="py-6 px-4 text-gray-700">
                  <span>{plan.traffic} Traffic*</span>
                </td>
                <td className="py-6 px-4">
                  <strong className="font-bold text-gray-900">
                    €{plan.newPrice} / month
                  </strong>
                </td>
                <td className="py-6 px-4">
                  <Button
                    variant="outline"
                    className="hover:bg-blue-700 hover:text-white cursor-pointer"
                  >
                    Select
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Accordion */}
      <div className="md:hidden">
        <Accordion type="single" collapsible className="w-full">
          {vdsPlans.map((plan) => (
            <AccordionItem
              key={plan.id}
              value={plan.id}
              className="border rounded-lg mb-3"
            >
              <AccordionTrigger className="px-4 py-3 hover:no-underline">
                <div className="flex justify-between items-center w-full">
                  <h3 className="font-semibold text-foreground uppercase">
                    {plan.name}
                  </h3>
                  <div className="flex items-center">
                    <strong className="font-bold text-foreground">
                      €{plan.newPrice}
                    </strong>
                    <span className="text-sm text-gray-500 ml-1">/month</span>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                <article className="space-y-4">
                  <dl className="grid grid-cols-2 gap-4">
                    <div>
                      <dt className="text-sm font-medium text-gray-500 mb-1">
                        CPU
                      </dt>
                      <dd className="text-gray-900">{plan.CpuCores} CPU</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500 mb-1">
                        RAM
                      </dt>
                      <dd className="text-foreground">{plan.ram} RAM</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500 mb-1">
                        Storage
                      </dt>
                      <dd className="text-foreground text-sm">
                        <div>{plan.storage.split(" o ")[0]}</div>
                        <span className="text-sm text-gray-500">
                          or request more
                        </span>
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500 mb-1">
                        Data Transfer
                      </dt>
                      <dd className="text-gray-900 text-sm">
                        {plan.traffic} Traffic*
                      </dd>
                    </div>
                  </dl>

                  <footer className="pt-4 border-t">
                    <p className="text-xs text-gray-500 mb-3">
                      including 22% VAT
                    </p>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      Select {plan.name}
                    </Button>
                  </footer>
                </article>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
