<template>
  <div class="card position-relative h-100">
    <div class="flex-fill row g-0">
      <div
        class="col-3"
        :style="
          'background: ' +
          color.hex_place +
          '; border-radius: 0.25rem 0 0 0.25rem'
        "
      ></div>
      <div class="col-9 d-flex flex-column">
        <div class="card-body">
          <h5 class="card-title">{{ $t(color.name_place) }}</h5>
          <h6 class="card-subtitle mb-2 text-muted">
            {{ color.number_pixelhobby }}
          </h6>
          <font-awesome-icon :icon="['fas', 'cubes']" />
          {{
            $tc("amount-pixels", color.amount, {
              amount: color.amount,
            })
          }}
          <div v-if="color.amount > 140" class="d-flex">
            <font-awesome-icon :icon="['fas', 'th']" class="me-1" />
            {{
              $tc("amount-colorplates", Math.floor(color.amount / 140), {
                amount: Math.floor(color.amount / 140),
              })
            }}
            +
            {{
              $tc("amount-pixels", color.amount % 140, {
                amount: color.amount % 140,
              })
            }}
          </div>
          <a
            href="#"
            class="btn btn-light position-absolute top-0 end-0 m-2"
            data-bs-toggle="modal"
            :data-bs-target="'#infoModal' + color.number_pixelhobby"
          >
            <font-awesome-icon
              :icon="['far', 'info-circle']"
              class="align-middle"
            />
          </a>
        </div>
        <div class="card-footer p-2">
          <a
            href="#"
            class="btn btn-light"
            data-bs-toggle="modal"
            :data-bs-target="'#cuttingModal' + color.number_pixelhobby"
          >
            <font-awesome-icon
              :icon="['fas', 'cut']"
              class="align-middle mb-1"
            />
            {{ $t("cut") }}
          </a>
        </div>
      </div>
    </div>
    <InfoModal :color="color" />
    <CuttingModal :color="color" />
  </div>
</template>
<script>
import InfoModal from "./InfoModal";
import CuttingModal from "./CuttingModal";

export default {
  name: "ColorCard",
  props: {
    color: {
      type: Object,
      required: true,
    },
  },
  components: {
    InfoModal,
    CuttingModal,
  },
};
</script>
<style lang="scss" scoped>
.card {
  min-height: 12rem;
}
</style>