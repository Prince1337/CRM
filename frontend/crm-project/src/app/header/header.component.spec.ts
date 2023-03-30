import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [HeaderComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the header component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the title', () => {
    const title = fixture.nativeElement.querySelector('h1');
    expect(title.textContent).toContain('Customer Relationship Management');
  });

  it('should display the navigation links', () => {
    const links = fixture.nativeElement.querySelectorAll('nav ul li a');
    expect(links.length).toBe(3);
    expect(links[0].textContent).toContain('Startseite');
    expect(links[1].textContent).toContain('Kunden');
    expect(links[3].textContent).toContain('Kontakte');
  });
});
