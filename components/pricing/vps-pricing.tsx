import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { vpsPlans } from "@/data/vps/vps-plans";

export default function VpsPricing() {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-4 md:p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Virtual Private Servers
        </h2>
        <p className="text-gray-600">
          Independent computing instances optimized for performance equipped
          with fast NVMe drives.
        </p>
      </div>

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
                <div className="text-xs font-normal text-gray-500">
                  including 22% VAT
                </div>
              </th>
              <th className="py-4 px-4"></th>
            </tr>
          </thead>
          <tbody>
            {vpsPlans.map((plan) => (
              <tr key={plan.id} className="border-b">
                <td className="py-6 px-4">
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">
                      {plan.name}
                    </div>
                  </div>
                </td>
                <td className="py-6 px-4 text-gray-700">
                  {plan.vCpuCores} vCPU
                </td>
                <td className="py-6 px-4 text-gray-700">{plan.ram} RAM</td>
                <td className="py-6 px-4 text-gray-700">
                  <div>{plan.storage.split(" o ")[0]}</div>
                  <div className="text-sm text-gray-500">
                    or {plan.storage.split(" o ")[1]}
                  </div>
                </td>
                <td className="py-6 px-4 text-gray-700">
                  <div>{plan.traffic} Traffic*</div>
                </td>
                <td className="py-6 px-4">
                  <div className="font-bold text-gray-900">
                    €{plan.newPrice} / month
                  </div>
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
          {vpsPlans.map((plan) => (
            <AccordionItem
              key={plan.id}
              value={plan.id}
              className="border rounded-lg mb-3"
            >
              <AccordionTrigger className="px-4 py-3 hover:no-underline">
                <div className="flex justify-between items-center w-full">
                  <div className="text-left">
                    <h4 className="font-semibold text-foreground uppercase">
                      {plan.name}
                    </h4>
                  </div>
                  <div className="flex items-center">
                    <p className="font-bold text-foreground">
                      €{plan.newPrice}
                    </p>
                    <span className="text-sm text-gray-500">/month</span>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm font-medium text-gray-500 mb-1">
                        CPU
                      </div>
                      <div className="text-gray-900">{plan.vCpuCores} vCPU</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-500 mb-1">
                        RAM
                      </div>
                      <div className="text-gray-900">{plan.ram} RAM</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-500 mb-1">
                        Storage
                      </div>
                      <div className="text-gray-900 text-sm">
                        <div>{plan.storage.split(" o ")[0]}</div>
                        <div className="text-gray-500">
                          or {plan.storage.split(" o ")[1]}
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-500 mb-1">
                        Data Transfer
                      </div>
                      <div className="text-gray-900 text-sm">
                        <div>{plan.traffic} Traffic*</div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <div className="text-xs text-gray-500 mb-3">
                      including 22% VAT
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      Order plan
                    </Button>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
