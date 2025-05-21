export interface IConfigData {
    FreePlanIndividual: string;
    BasicPlanIndividual: string;
    PremiumPlanIndividual:string;
    GoldPlanEnterprises:string;
    PlatinumPlanEnterprises: string;
    DiamondPlanEnterprises: string;
    FreePlanIndividualPrice: string;
    BasicPlanIndividualPrice: string;
    PremiumPlanIndividualPrice: string;
    GoldPlanEnterprisesPrice: string;
    PlatinumPlanEnterprisesPrice: string;
    DiamondPlanEnterprisesPrice: string;
    FreePlanIndividualTenure:  string;
    BasicPlanIndividualTenure:  string;
    PremiumPlanIndividualTenure:  string;
    GoldPlanEnterprisesTenure: string;
    PlatinumPlanEnterprisesTenure:  string;
    DiamondPlanEnterprisesTenure:  string;
    [key: string]: string;
  }
  
export interface ISubscriptionPlan {
  title: string;
  originalPrice: number;
  discountedPrice: number;
  period: string;
  description: string[];
  additionalDescription: string[];
  isMostPopular: boolean;
  type: string;
  planName?: string;
  priceId?: string;
  discountPriceId?: string;
  stripeId?: string;
  periodId?: string;
}
 
