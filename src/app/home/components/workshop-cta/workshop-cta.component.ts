import { Component } from "@angular/core";

@Component({
  selector: "conf-workshop-cta",
  template: `
    <div class="inner">
      <h2>Workshops</h2>

      <div class="workshop">
        <div class="details">
          <h3>NgRx Store: From Start to Advanced in 2 Days</h3>
          <h4>
            Want to extend your learning at NgRx Conf? Purchase an additional
            workshop ticket to dive deep into reactive state management with
            NgRx Store.
          </h4>
          <p>
            NgRx Store is the de facto state management library for Angular apps
            at Google. It's widely used, well supported and is the great
            addition for any non-trivial web app. Whether you are just starting
            with NgRx Store or were using it for a while - you'll learn
            something new during this training. We'll start the workshop with
            the step-by-step migration of the existing angular app to NgRx
            State-based one - this will help you understand why, where and how
            to use it. We will then look into two different approaches to state
            updates and finally to more advanced features, such as entities.
          </p>
          <h4>About the trainer - Alex Okrushko</h4>
          <p>
            Alex is a software engineer at Google, who has been maintaining the
            NgRx library for Google Angular projects for over 3 years. He is
            also a core member of NgRx team and a frequent contributor to the
            library, in particular he has landed many recent improvements in
            NgRx for version 8.
          </p>
          <p>
            Alex is also a speaker at Angular conferences and the organizer of
            ngToronto. In 2019 so far he spoke at ngAltanta (Atlanta, USA),
            angularNYC (New York City, USA), ngVikings (Copenghagen, Denmark),
            AngularInDepthConf (Kiev, Ukraine) and ng-MY (Kuala Lumpur,
            Malaysia) with ngPoland (Warsaw, Poland) and ngTalks (Kharkiv,
            Ukraine) coming up.
          </p>
        </div>
        <conf-speaker [speaker]="trainer"></conf-speaker>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        padding: 80px 20px;
        background-color: #f9f9f9;
        width: 100%;
        color: #35003d;
      }

      .inner {
        display: block;
        width: 100%;
        max-width: 1080px;
        margin: 0 auto;
      }

      .workshop {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
      }

      .details {
        max-width: 640px;
      }

      h2 {
        font-size: 36px;
        font-family: "Sansation Bold", sans-serif;
        margin: 0 0 24px;
      }

      h3 {
        font-size: 24px;
        font-family: "Sansation Regular", sans-serif;
      }

      h4,
      p {
        font-size: 16px;
        margin-bottom: 8px;
        line-height: 1.6;
      }

      h4 {
        font-weight: 500;
        margin-top: 12px;
      }

      p {
        font-weight: 300;
      }

      @media screen and (max-width: 1080px) {
        .workshop {
          flex-direction: column;
        }

        conf-speaker {
          margin: 20px auto 0;
        }
      }
    `
  ]
})
export class WorkshopCtaComponent {
  trainer = {
    name: "Alex Okrushko",
    headshotUrl: "/assets/speakers/alex-okrushko.jpg",
    brief: "Google, Firebase, NgRx"
  };
}
