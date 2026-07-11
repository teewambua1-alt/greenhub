import { LearnHero } from '../components/learn/LearnHero';
import { LearningCategories } from '../components/learn/LearningCategories';
import { FeaturedArticles } from '../components/learn/FeaturedArticles';
import { LearningPaths } from '../components/learn/LearningPaths';
import { Encyclopedia } from '../components/learn/Encyclopedia';
import { VideoLearning } from '../components/learn/VideoLearning';
import { ProductEducation } from '../components/learn/ProductEducation';
import { StrainEducation } from '../components/learn/StrainEducation';
import { WellnessTopics } from '../components/learn/WellnessTopics';
import { ExpertInsights } from '../components/learn/ExpertInsights';
import { IndustryNews } from '../components/learn/IndustryNews';
import { FAQ } from '../components/FAQ';
import { AppPromo } from '../components/AppPromo';

export function Learn() {
  return (
    <main className="pt-24 pb-12">
      <LearnHero />
      <LearningCategories />
      <FeaturedArticles />
      <LearningPaths />
      <Encyclopedia />
      <VideoLearning />
      <ProductEducation />
      <StrainEducation />
      <WellnessTopics />
      <ExpertInsights />
      <IndustryNews />
      <div className="py-12">
        <FAQ />
      </div>
      <AppPromo />
    </main>
  );
}
