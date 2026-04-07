import { Injectable } from '@nestjs/common';

export type SupportedLocale = 'ar' | 'en';

@Injectable()
export class TranslationService {
  async translateArticle(input: {
    title: string;
    content: string;
    summary?: string;
    from: SupportedLocale;
    to: SupportedLocale;
  }) {
    return {
      title: `[${input.to}] ${input.title}`,
      content: `[${input.to}] ${input.content}`,
      summary: input.summary ? `[${input.to}] ${input.summary}` : undefined,
      locale: input.to,
      sourceLocale: input.from,
      status: 'auto-translated',
    };
  }
}
