// textbox animation
// https://www.freecodecamp.org/news/scroll-animations-with-javascript-intersection-observer-api/
const asr_animation = document.querySelectorAll('.animation_small_right');
const asl_animation = document.querySelectorAll('.animation_small_left');
const ast_animation = document.querySelectorAll('.animation_small_top');
const abl_animation = document.querySelectorAll('.animation_big_left');
const fade_animation = document.querySelectorAll('.animation_fade')

const observer = new IntersectionObserver((entries) => {
    
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animation_appear');
        }
    })},
    {threshold: 0.3}
);

for (let i = 0; i < asr_animation.length; i++) {
    observer.observe(asr_animation[i]);
}
for (let i = 0; i < asl_animation.length; i++) {
    observer.observe(asl_animation[i]);
}
for (let i = 0; i < ast_animation.length; i++) {
    observer.observe(ast_animation[i]);
}
for (let i = 0; i < abl_animation.length; i++) {
    observer.observe(abl_animation[i]);
}
for (let i = 0; i < fade_animation.length; i++) {
    observer.observe(fade_animation[i]);
}