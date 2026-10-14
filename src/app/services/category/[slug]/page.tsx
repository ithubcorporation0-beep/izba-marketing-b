import { permanentRedirect } from 'next/navigation';
import { serviceCategories } from '@/content/services';

interface LegacyCategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return serviceCategories.map((cat) => ({
    slug: cat.slug,
  }));
}

export default async function LegacyCategoryRedirectPage({
  params,
}: LegacyCategoryPageProps) {
  const { slug } = await params;
  permanentRedirect(`/services/${slug}`);
}
