import { HasHtmlFormat } from './HasHtmlFormat'
export interface HasRender {
    render(docOdj: HasHtmlFormat, docType: string): void;
}