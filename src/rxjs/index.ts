import { fromEvent } from 'rxjs';

fromEvent(document, 'click').subscribe(e => console.log(e));
