import { CreditCard, DollarSign, Package } from "lucide-react";
import { formatter } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Overview } from "@/components/overview";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";

interface DashboardPageProps {
  params: { storeId: string }
};

interface GraphData {
  name: string,
  total: number
};

const DashboardPage: React.FC<DashboardPageProps> = async ({
  params
}) => {
  const graphData: GraphData[] = [
    { name: "Jan", total: 0 },
    { name: "Feb", total: 2 },
    { name: "Mar", total: 0 },
    { name: "Apr", total: 0 },
    { name: "May", total: 5 },
    { name: "Jun", total: 0 },
    { name: "Jul", total: 1 },
    { name: "Aug", total: 0 },
    { name: "Sep", total: 10 },
    { name: "Oct", total: 0 },
    { name: "Nov", total: 8 },
    { name: "Dec", total: 3 },
  ]
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <Heading title="Dashboard" description="Overview of your store" />
        <Separator />
        <div className="grid gap-4 grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Revenue
              </CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground"/>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {formatter.format(100)}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Sales
              </CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground"/>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                +25
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Products In Stock
              </CardTitle>
              <Package className="h-4 w-4 text-muted-foreground"/>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                12
              </div>
            </CardContent>
          </Card>
        </div>
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>
              Overview
            </CardTitle>
            <CardContent className="pl-2">
              <Overview data={graphData} />
            </CardContent>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
 
export default DashboardPage;