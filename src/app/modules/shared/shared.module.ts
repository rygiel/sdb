import { NgModule } from "@angular/core";
import { PaperComponent } from "./paper/paper.component";
import { PaperFooterComponent } from "./paper/footer/paper-footer.component";
import { PaperContentComponent } from "./paper/content/paper-content.component";
import { PaperHeaderComponent } from "./paper/header/paper-header.component";


@NgModule({
  imports: [],
  declarations: [PaperComponent, PaperHeaderComponent, PaperFooterComponent, PaperContentComponent],
  exports: [PaperComponent, PaperHeaderComponent, PaperFooterComponent, PaperContentComponent]
})
export class SharedModule {}
