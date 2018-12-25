import { Pipe, PipeTransform } from '@angular/core';
import { markdown } from 'markdown';

/**
 * Konvertiert Markdown-formatierten Text in HTML.
 */
@Pipe({
  name: 'markdown',
})
export class MarkdownPipe implements PipeTransform {

  transform(text?: string): string {
    if (text) {
      return markdown.toHTML(text);
    } else {
      return text;
    }
  }

}
