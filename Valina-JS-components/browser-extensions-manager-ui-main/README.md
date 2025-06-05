# Frontend Mentor - Browser extensions manager UI
https://snazzy-froyo-29152e.netlify.app/
![Design preview for the Browser extensions manager UI coding challenge](./preview.jpg)

## Welcome! 👋
![screencapture-127-0-0-1-5501-Valina-JS-components-browser-extensions-manager-ui-main-index-html-2025-05-26-10_32_29](https://github.com/user-attachments/assets/5883f438-b2d9-4a39-8651-1cdeb684e16c)
![screencapture-127-0-0-1-5501-Valina-JS-components-browser-extensions-manager-ui-main-index-html-2025-05-26-10_32_05](https://github.com/user-attachments/assets/e0630f96-116b-4dfb-bc9b-1bbf495001a4)
![screencapture-127-0-0-1-5501-Valina-JS-components-browser-extensions-manager-ui-main-index-html-2025-05-26-10_31_57](https://github.com/user-attachments/assets/dae53062-2f6f-4966-b6f8-1cdbb980ddd1)
![screencapture-127-0-0-1-5500-index-html-2025-05-26-10_29_39](https://github.com/user-attachments/assets/57992f78-d0f5-489f-998d-815764cd45b7)
![screencapture-127-0-0-1-5500-index-html-2025-05-26-10_29_07](https://github.com/user-attachments/assets/6b24ec0c-caaa-4839-ba5c-03af56754858)

다른 페이지>? 로 넘어가면 checkout이 동작을 안하는 이슈
필터링 된 데이터를 filtered의 Index를 그대로 사용 => 그래서 원본 data가 변경되지 않음
잘못된 idx를 사용하고 있었음
active/inactive 모드에선 index가 filtered 기준이라

원본 data의 check 상태가 엉뚱한 아이템에 반영됨

all로 돌아갔을 때, 사용자가 체크한 내용이 안 보임
→ 체크 반영이 안 된 것처럼 오작동
✨ 제목
체크박스 상태 변경 후 필터 변경 시 상태 반영이 안 되는 이슈

🧩 문제 현상
카드 리스트를 filter 기준으로 렌더링했을 때, 체크박스 상태를 변경하고 다른 필터로 전환하면 상태 반영이 안 됨

다시 all 필터로 돌아와도 변경사항이 적용되지 않음

🧠 원인 분석
렌더링 시 filtered.forEach()에서 filtered 배열 기준 index를 data-index로 사용함

이후 해당 index를 기준으로 원본 data를 수정 (data[idx].check = ...)

하지만 filtered의 index는 원본과 불일치할 수 있기 때문에, 엉뚱한 항목을 수정하는 오류 발생

🔧 해결 방안
filtered = data.map((item, index) => ({ ...item, _index: index })) 형태로 _index를 저장

filtered는 뷰 전용 상태로 사용하고, 체크 변경은 filtered[idx].check만 수정

필터 전환 시 syncToData() 함수로 filtered의 _index 기준으로 data를 업데이트하여 상태 반영 보장

✅ 결과
체크 변경 사항이 필터 전환 후에도 정확히 유지됨

상태 꼬임 없이 렌더링 / 데이터 동기화 동작 정상화

📌 한줄 요약
뷰 상태(filtered)와 원본 데이터(data)를 분리하고, 명시적 동기화(sync) 타이밍을 관리함으로써 상태 꼬임 문제를 해결했다.



다크모드

filtered는 뷰에만 집중, data는 저장에만 집중
SPA 구조처럼 동작하게 만들기 위한 구조임

상태 꼬임 방지 (index mismatch 문제 해결)

뷰를 따로 다루니까 나중에 "변경사항 저장" 버튼 추가도 쉬움

무조건 원본 data는 syncToData() 호출 전까진 안 바뀜


Thanks for checking out this front-end coding challenge.

[Frontend Mentor](https://www.frontendmentor.io) challenges help you improve your coding skills by building realistic projects.

**To do this challenge, you need a basic understanding of HTML, CSS and JavaScript.**

## The challenge

Your challenge is to build out this browser extension manager UI and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

We provide the data for the extensions in a local `data.json` file. So you can use that to add the data dynamically if you choose.

Your users should be able to: 

- Toggle extensions between active and inactive states
- Filter active and inactive extensions
- Remove extensions from the list
- Select their color theme
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

Want some support on the challenge? [Join our community](https://www.frontendmentor.io/community) and ask questions in the **#help** channel.

## Where to find everything

Your task is to build out the project to the designs inside the `/design` folder. You will find both a mobile and a desktop version of the design. 

The designs are in JPG static format. Using JPGs will mean that you'll need to use your best judgment for styles such as `font-size`, `padding` and `margin`. 

If you would like the Figma design file to gain experience using professional tools and build more accurate projects faster, you can [subscribe as a PRO member](https://www.frontendmentor.io/pro).

All the required assets for this project are in the `/assets` folder. The images are already exported for the correct screen size and optimized.

We also include variable and static font files for the required fonts for this project. You can choose to either link to Google Fonts or use the local font files to host the fonts yourself. Note that we've removed the static font files for the font weights that aren't needed for this project.

There is also a `style-guide.md` file containing the information you'll need, such as color palette and fonts.

## Building your project

Feel free to use any workflow that you feel comfortable with. Below is a suggested process, but do not feel like you need to follow these steps:

1. Initialize your project as a public repository on [GitHub](https://github.com/). Creating a repo will make it easier to share your code with the community if you need help. If you're not sure how to do this, [have a read-through of this Try Git resource](https://try.github.io/).
2. Configure your repository to publish your code to a web address. This will also be useful if you need some help during a challenge as you can share the URL for your project with your repo URL. There are a number of ways to do this, and we provide some recommendations below.
3. Look through the designs to start planning out how you'll tackle the project. This step is crucial to help you think ahead for CSS classes to create reusable styles.
4. Before adding any styles, structure your content with HTML. Writing your HTML first can help focus your attention on creating well-structured content.
5. Write out the base styles for your project, including general content styles, such as `font-family` and `font-size`.
6. Start adding styles to the top of the page and work down. Only move on to the next section once you're happy you've completed the area you're working on.

## Deploying your project

As mentioned above, there are many ways to host your project for free. Our recommend hosts are:

- [GitHub Pages](https://pages.github.com/)
- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)

You can host your site using one of these solutions or any of our other trusted providers. [Read more about our recommended and trusted hosts](https://medium.com/frontend-mentor/frontend-mentor-trusted-hosting-providers-bf000dfebe).

## Create a custom `README.md`

We strongly recommend overwriting this `README.md` with a custom one. We've provided a template inside the [`README-template.md`](./README-template.md) file in this starter code.

The template provides a guide for what to add. A custom `README` will help you explain your project and reflect on your learnings. Please feel free to edit our template as much as you like.

Once you've added your information to the template, delete this file and rename the `README-template.md` file to `README.md`. That will make it show up as your repository's README file.

## Submitting your solution

Submit your solution on the platform for the rest of the community to see. Follow our ["Complete guide to submitting solutions"](https://medium.com/frontend-mentor/a-complete-guide-to-submitting-solutions-on-frontend-mentor-ac6384162248) for tips on how to do this.

Remember, if you're looking for feedback on your solution, be sure to ask questions when submitting it. The more specific and detailed you are with your questions, the higher the chance you'll get valuable feedback from the community.

## Sharing your solution

There are multiple places you can share your solution:

1. Share your solution page in the **#finished-projects** channel of our [community](https://www.frontendmentor.io/community). 
2. Tweet [@frontendmentor](https://twitter.com/frontendmentor) and mention **@frontendmentor**, including the repo and live URLs in the tweet. We'd love to take a look at what you've built and help share it around.
3. Share your solution on other social channels like LinkedIn.
4. Blog about your experience building your project. Writing about your workflow, technical choices, and talking through your code is a brilliant way to reinforce what you've learned. Great platforms to write on are [dev.to](https://dev.to/), [Hashnode](https://hashnode.com/), and [CodeNewbie](https://community.codenewbie.org/).

We provide templates to help you share your solution once you've submitted it on the platform. Please do edit them and include specific questions when you're looking for feedback. 

The more specific you are with your questions the more likely it is that another member of the community will give you feedback.

## Got feedback for us?

We love receiving feedback! We're always looking to improve our challenges and our platform. So if you have anything you'd like to mention, please email hi[at]frontendmentor[dot]io.

This challenge is completely free. Please share it with anyone who will find it useful for practice.

**Have fun building!** 🚀
