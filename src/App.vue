<script setup>
import "./styles/globals.css";
import { reactive, computed, ref } from "vue";
const ratings = reactive([
	{ rate: 1, selected: false },
	{ rate: 2, selected: false },
	{ rate: 3, selected: false },
	{ rate: 4, selected: false },
	{ rate: 5, selected: false },
]);
const success = ref(false);
const rated = ref(0);

function handleSelect(rate) {
	ratings.forEach((el) => {
		el.selected = false;
		if (el.rate === rate) el.selected = true;
		rated.value = rate;
	});
}

async function handleSubmit() {
	if (!rated.value) return;

	success.value = true;

	// try {
	// 	const res = await fetch("url", {
	// 		method: "POST",
	// 		headers: {
	// 			"Content-Type": "application/json",
	// 		},
	// 		body: JSON.stringify(rated.value),
	// 	});
	// 	if (res.ok) {
	// 		success.value = true;
	// 	}
	// } catch (error) {
	// 	console.log(error);
	// }
}
</script>

<template>
	<div class="container mx-auto">
		<div
			class="max-w-[26rem] h-auto bg-gradient-to-b from-dark-blue from-5% to-dark-blue-700 rounded-3xl py-10 px-8"
		>
			<template v-if="success">
				<div class="flex flex-col gap-8 items-center">
					<img src="/illustration-thank-you.svg" alt="" class="max-w-[10rem]" />
					<p
						class="bg-dark-blue rounded-full pt-2 pb-1 px-4 text-[0.95rem] text-orange opacity-90 text-center"
					>
						You selected {{ rated }} out of {{ ratings.length }}
					</p>
					<h2 class="text-white text-3xl">Thank you!</h2>
					<p class="text-center text-medium-grey mt-[-1.3rem] text-[0.95rem]">
						We appreciate you taking the time to give a rating. If you ever need
						more support, don’t hesitate to get in touch!
					</p>
				</div>
			</template>
			<template v-if="!success">
				<div class="flex flex-col gap-8">
					<div class="rounded-full bg-dark-blue-500 w-max p-4">
						<img src="/icon-star.svg" alt="" />
					</div>
					<div>
						<h1 class="text-white text-3xl font-bold">How did we do?</h1>
						<p class="text-light-grey my-1 text-md">
							Please let us know how we did with your support request. All
							feedback is appreciated to help us improve our offering!
						</p>
					</div>
					<div class="flex items-center justify-between">
						<button
							v-for="rating in ratings"
							class="rounded-full w-12 aspect-square bg-dark-blue text-medium-grey ease duration-200 hover:bg-medium-grey hover:text-white"
							:class="{
								'bg-orange !text-white ': rating.selected,
							}"
							@click="handleSelect(rating.rate)"
						>
							{{ rating.rate }}
						</button>
					</div>
					<div>
						<button
							class="w-full bg-orange text-white py-2 rounded-full uppercase tracking-widest ease duration-200 hover:bg-white hover:text-orange"
							@click="handleSubmit"
						>
							Submit
						</button>
					</div>
				</div>
			</template>
		</div>
	</div>
</template>

<style scoped></style>
