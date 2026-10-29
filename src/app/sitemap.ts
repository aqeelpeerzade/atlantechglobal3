import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

const ROUTES = [
  "",
  "/who-we-are/",
  "/why-us/",
  "/industries/",
  "/careers/",
  "/contact/",
  "/platforms/",
  "/platforms/adobe-commerce/",
  "/platforms/adobe-experience-platform-consulting/",
  "/platforms/erpnext-consulting-services/",
  "/platforms/google-cloud/",
  "/platforms/zoho-workplace/",
  "/ai-automation-services/",
  "/ai-automation-services/ai-strategy-enginnering/",
  "/ai-automation-services/intelligent-commerce/",
  "/ai-automation-services/llm-based-solutions/",
  "/ai-automation-services/process-automation/",
  "/cloud-infrastructure-services/",
  "/cloud-infrastructure-services/cloud-migration/",
  "/cloud-infrastructure-services/devops-ci-cd/",
  "/cloud-infrastructure-services/multi-cloud-environments/",
  "/cloud-infrastructure-services/secure-cloud-architecture/",
  "/data-analytics-services/",
  "/data-analytics-services/analytics-bi/",
  "/data-analytics-services/data-engineering/",
  "/data-analytics-services/data-governance/",
  "/data-analytics-services/modern-data-stack/",
  "/digital-transformation-services/",
  "/digital-transformation-services/application-modernization/",
  "/digital-transformation-services/consulting-strategy/",
  "/digital-transformation-services/digital-experience-commerce/",
  "/digital-transformation-services/digital-growth/",
  "/digital-transformation-services/enterprise-applications-erp/",
  "/managed-services/",
  "/managed-services/application-maintenance/",
  "/managed-services/it-operations-support/",
  "/managed-services/offshore-development-teams/",
  "/product-engineering-services/",
  "/product-engineering-services/api-microservices/",
  "/product-engineering-services/mobile-web-saas-ecommerce/",
  "/product-engineering-services/testing-qa-automation/",
  "/product-engineering-services/ui-ux-prototyping/",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((path) => ({
    url: `${SITE_URL}${path || "/"}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : path.split("/").length > 3 ? 0.6 : 0.8,
  }));
}
