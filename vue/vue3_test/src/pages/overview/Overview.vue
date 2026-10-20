<template>
  <div class="vp-doc">
    <h1>组件概览</h1>
    <p>以下是 Element Plus 提供的所有组件。</p>

    <div v-for="category in componentCategories" :key="category.name" class="component-category">
      <div class="category-header">
        <h2>{{ category.name }}</h2>
        <el-badge :value="category.components.length" type="info" />
      </div>
      <div class="component-card-grid">
        <a
          v-for="comp in category.components"
          :key="comp.name"
          class="component-card"
          href="javascript:void(0)"
          @click.prevent="handleClick(comp)"
        >
          <div class="card-icon-box">
            <component :is="comp.icon" />
          </div>
          <div class="card-text">
            <span class="card-title">{{ comp.name }}</span>
            <span class="card-desc">{{ comp.desc }}</span>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { h, defineComponent } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const svgIconG = (viewBox: string, inner: string) =>
  defineComponent({
    name: 'SvgIcon',
    render() {
      return h('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox,
        fill: 'none',
        class: 'component-icon',
        innerHTML: inner,
      })
    },
  })

const IconButton = svgIconG(
  '0 0 40 40',
  '<rect x="6" y="14" width="28" height="12" rx="6" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M14 20h12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',
)
const IconBorder = svgIconG(
  '0 0 40 40',
  '<rect x="8" y="8" width="24" height="24" rx="2" stroke="currentColor" stroke-width="1.5" fill="none" stroke-dasharray="4 2"/>',
)
const IconColor = svgIconG(
  '0 0 40 40',
  '<circle cx="14" cy="20" r="6" fill="currentColor" opacity="0.3"/><circle cx="26" cy="20" r="6" fill="currentColor" opacity="0.6"/><circle cx="20" cy="14" r="6" fill="currentColor" opacity="0.8"/>',
)
const IconContainer = svgIconG(
  '0 0 40 40',
  '<rect x="6" y="6" width="28" height="28" rx="2" stroke="currentColor" stroke-width="1.5" fill="none"/><line x1="6" y1="14" x2="34" y2="14" stroke="currentColor" stroke-width="1.5"/><line x1="6" y1="26" x2="34" y2="26" stroke="currentColor" stroke-width="1.5"/>',
)
const IconIcon = svgIconG(
  '0 0 40 40',
  '<path d="M20 8l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z" fill="currentColor"/>',
)
const IconLayout = svgIconG(
  '0 0 40 40',
  '<rect x="6" y="6" width="28" height="28" rx="2" stroke="currentColor" stroke-width="1.5" fill="none"/><line x1="16" y1="6" x2="16" y2="34" stroke="currentColor" stroke-width="1.5"/><line x1="6" y1="18" x2="16" y2="18" stroke="currentColor" stroke-width="1.5"/>',
)
const IconLink = svgIconG(
  '0 0 40 40',
  '<path d="M16 20h8M28 16a4 4 0 010 8h-4M12 24a4 4 0 010-8h4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" fill="none"/>',
)
const IconText = svgIconG(
  '0 0 40 40',
  '<path d="M8 12h24M8 20h18M8 28h22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" fill="none"/>',
)
const IconScrollbar = svgIconG(
  '0 0 40 40',
  '<rect x="6" y="6" width="28" height="28" rx="2" stroke="currentColor" stroke-width="1.5" fill="none"/><rect x="30" y="10" width="2" height="8" rx="1" fill="currentColor" opacity="0.4"/><rect x="30" y="22" width="2" height="8" rx="1" fill="currentColor" opacity="0.4"/>',
)
const IconSpace = svgIconG(
  '0 0 40 40',
  '<rect x="6" y="12" width="10" height="16" rx="2" stroke="currentColor" stroke-width="1.5" fill="none"/><rect x="24" y="12" width="10" height="16" rx="2" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M18 20h4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="2 2"/>',
)
const IconTypography = svgIconG(
  '0 0 40 40',
  '<path d="M8 10l12-4 12 4M14 6v24M10 30h16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
)
const IconOverflow = svgIconG(
  '0 0 40 40',
  '<rect x="6" y="10" width="28" height="20" rx="2" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M6 18h28" stroke="currentColor" stroke-width="1.5"/><circle cx="32" cy="14" r="1.5" fill="currentColor"/>',
)
const IconConfigProvider = svgIconG(
  '0 0 40 40',
  '<circle cx="20" cy="20" r="10" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M20 14v12M14 20h12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="20" cy="20" r="3" fill="currentColor" opacity="0.3"/>',
)
const IconAutocomplete = svgIconG(
  '0 0 40 40',
  '<rect x="6" y="8" width="28" height="8" rx="2" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M12 20l4 4-4 4M6 24h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
)
const IconCascader = svgIconG(
  '0 0 40 40',
  '<path d="M10 12h8M10 20h12M10 28h8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" fill="none"/><path d="M22 12l4 4M26 12l-4 4M26 20l4 4M30 20l-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
)
const IconCheckbox = svgIconG(
  '0 0 40 40',
  '<rect x="8" y="8" width="10" height="10" rx="2" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M11 13l2 2 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/><rect x="22" y="8" width="10" height="10" rx="2" stroke="currentColor" stroke-width="1.5" fill="none"/><rect x="8" y="22" width="10" height="10" rx="2" stroke="currentColor" stroke-width="1.5" fill="none"/><rect x="22" y="22" width="10" height="10" rx="2" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M25 27l2 2 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
)
const IconColorPicker = svgIconG(
  '0 0 40 40',
  '<circle cx="20" cy="20" r="10" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M20 10a10 10 0 015 5L20 20z" fill="currentColor" opacity="0.3"/><path d="M20 10a10 10 0 00-5 5L20 20z" fill="currentColor" opacity="0.5"/><path d="M15 15a10 10 0 000 10L20 20z" fill="currentColor" opacity="0.7"/>',
)
const IconDatePicker = svgIconG(
  '0 0 40 40',
  '<rect x="6" y="8" width="28" height="24" rx="2" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M6 16h28" stroke="currentColor" stroke-width="1.5"/><path d="M14 6v4M26 6v4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><rect x="12" y="20" width="4" height="4" rx="0.5" fill="currentColor" opacity="0.4"/><rect x="18" y="20" width="4" height="4" rx="0.5" fill="currentColor" opacity="0.4"/><rect x="24" y="20" width="4" height="4" rx="0.5" fill="currentColor" opacity="0.4"/>',
)
const IconDateTimePicker = svgIconG(
  '0 0 40 40',
  '<rect x="4" y="8" width="20" height="20" rx="2" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M4 16h20" stroke="currentColor" stroke-width="1.5"/><path d="M10 6v4M18 6v4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="30" cy="26" r="8" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M30 22v4l3 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
)
const IconForm = svgIconG(
  '0 0 40 40',
  '<rect x="6" y="6" width="28" height="28" rx="2" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M12 14h6M12 20h10M12 26h8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" fill="none"/><rect x="22" y="12" width="8" height="4" rx="1" stroke="currentColor" stroke-width="1" fill="none"/><rect x="26" y="18" width="4" height="4" rx="1" stroke="currentColor" stroke-width="1" fill="none"/><rect x="22" y="24" width="8" height="4" rx="1" stroke="currentColor" stroke-width="1" fill="none"/>',
)
const IconInput = svgIconG(
  '0 0 40 40',
  '<rect x="6" y="12" width="28" height="16" rx="2" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M12 20h8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" fill="none"/>',
)
const IconInputNumber = svgIconG(
  '0 0 40 40',
  '<rect x="6" y="10" width="28" height="20" rx="2" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M28 16v8M24 20h8" stroke="currentColor" stroke-width="1" stroke-linecap="round" fill="none"/><path d="M14 20h4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" fill="none"/>',
)
const IconMention = svgIconG(
  '0 0 40 40',
  '<rect x="6" y="10" width="28" height="20" rx="2" stroke="currentColor" stroke-width="1.5" fill="none"/><circle cx="18" cy="20" r="6" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M24 20v4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" fill="none"/>',
)
const IconRadio = svgIconG(
  '0 0 40 40',
  '<circle cx="13" cy="13" r="5" stroke="currentColor" stroke-width="1.5" fill="none"/><circle cx="13" cy="13" r="2" fill="currentColor"/><circle cx="27" cy="13" r="5" stroke="currentColor" stroke-width="1.5" fill="none"/><circle cx="13" cy="27" r="5" stroke="currentColor" stroke-width="1.5" fill="none"/><circle cx="27" cy="27" r="5" stroke="currentColor" stroke-width="1.5" fill="none"/><circle cx="27" cy="27" r="2" fill="currentColor"/>',
)
const IconRate = svgIconG(
  '0 0 40 40',
  '<path d="M10 16l2.5 5 5.5.8-4 3.9.9 5.3L10 28.5 5.1 31l.9-5.3-4-3.9 5.5-.8z" fill="currentColor"/><path d="M24 16l2.5 5 5.5.8-4 3.9.9 5.3L24 28.5 19.1 31l.9-5.3-4-3.9 5.5-.8z" fill="currentColor" opacity="0.3"/>',
)
const IconSelect = svgIconG(
  '0 0 40 40',
  '<rect x="6" y="8" width="28" height="10" rx="2" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M26 12l2 2 2-2" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" fill="none"/><rect x="6" y="20" width="28" height="12" rx="2" stroke="currentColor" stroke-width="1" fill="none" opacity="0.4"/><path d="M12 24h16M12 28h10" stroke="currentColor" stroke-width="1" stroke-linecap="round" fill="none" opacity="0.4"/>',
)
const IconSelectV2 = svgIconG(
  '0 0 40 40',
  '<rect x="6" y="8" width="28" height="10" rx="2" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M26 12l2 2 2-2" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" fill="none"/><path d="M10 22h20M10 26h16M10 30h12" stroke="currentColor" stroke-width="1" stroke-linecap="round" fill="none" opacity="0.4"/>',
)
const IconSlider = svgIconG(
  '0 0 40 40',
  '<path d="M8 20h24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" fill="none"/><circle cx="14" cy="20" r="3" fill="currentColor"/><circle cx="28" cy="20" r="3" stroke="currentColor" stroke-width="1.5" fill="none"/>',
)
const IconSwitch = svgIconG(
  '0 0 40 40',
  '<rect x="8" y="14" width="24" height="12" rx="6" stroke="currentColor" stroke-width="1.5" fill="none"/><circle cx="24" cy="20" r="4" fill="currentColor"/>',
)
const IconTimePicker = svgIconG(
  '0 0 40 40',
  '<circle cx="20" cy="20" r="12" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M20 12v8l5 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
)
const IconTimeSelect = svgIconG(
  '0 0 40 40',
  '<circle cx="20" cy="20" r="12" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M20 14v6h4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/><path d="M12 20h-2M30 20h-2" stroke="currentColor" stroke-width="1" stroke-linecap="round" fill="none"/>',
)
const IconTransfer = svgIconG(
  '0 0 40 40',
  '<rect x="4" y="8" width="14" height="24" rx="2" stroke="currentColor" stroke-width="1.5" fill="none"/><rect x="22" y="8" width="14" height="24" rx="2" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M18 16l4 4-4 4M18 20h-4M22 20h4" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
)
const IconTreeSelect = svgIconG(
  '0 0 40 40',
  '<rect x="6" y="8" width="28" height="10" rx="2" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M26 12l2 2 2-2" stroke="currentColor" stroke-width="1" stroke-linecap="round" fill="none"/><path d="M14 22h4M14 26h8M14 30h6" stroke="currentColor" stroke-width="1" stroke-linecap="round" fill="none" opacity="0.5"/>',
)
const IconUpload = svgIconG(
  '0 0 40 40',
  '<rect x="6" y="18" width="28" height="16" rx="2" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M20 8v16M14 14l6-6 6 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
)
const IconAvatar = svgIconG(
  '0 0 40 40',
  '<circle cx="20" cy="20" r="12" stroke="currentColor" stroke-width="1.5" fill="none"/><circle cx="20" cy="16" r="4" fill="currentColor" opacity="0.4"/><path d="M12 30a8 8 0 0116 0" fill="currentColor" opacity="0.3"/>',
)
const IconBadge = svgIconG(
  '0 0 40 40',
  '<rect x="6" y="14" width="16" height="16" rx="2" stroke="currentColor" stroke-width="1.5" fill="none"/><circle cx="26" cy="12" r="6" fill="currentColor" opacity="0.6"/>',
)
const IconCalendar = svgIconG(
  '0 0 40 40',
  '<rect x="6" y="8" width="28" height="24" rx="2" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M6 16h28" stroke="currentColor" stroke-width="1.0"/><path d="M14 6v4M26 6v4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><rect x="12" y="20" width="4" height="4" fill="currentColor" opacity="0.4"/><rect x="18" y="20" width="4" height="4" fill="currentColor" opacity="0.4"/><rect x="24" y="20" width="4" height="4" fill="currentColor" opacity="0.4"/><rect x="12" y="26" width="4" height="4" fill="currentColor" opacity="0.4"/>',
)
const IconCard = svgIconG(
  '0 0 40 40',
  '<rect x="6" y="6" width="28" height="28" rx="2" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M6 14h28" stroke="currentColor" stroke-width="1.0"/><path d="M12 20h16M12 24h10" stroke="currentColor" stroke-width="1.0" stroke-linecap="round" fill="none" opacity="0.5"/>',
)
const IconCarousel = svgIconG(
  '0 0 40 40',
  '<rect x="4" y="8" width="32" height="24" rx="2" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M14 20l-4 4 4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/><path d="M26 20l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
)
const IconCollapse = svgIconG(
  '0 0 40 40',
  '<rect x="6" y="8" width="28" height="8" rx="2" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M28 12l2 2 2-2" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" fill="none"/><rect x="6" y="18" width="28" height="8" rx="2" stroke="currentColor" stroke-width="1.0" fill="none" opacity="0.4"/><rect x="6" y="28" width="28" height="8" rx="2" stroke="currentColor" stroke-width="1.0" fill="none" opacity="0.4"/>',
)
const IconDescriptions = svgIconG(
  '0 0 40 40',
  '<rect x="6" y="6" width="28" height="28" rx="2" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M6 14h28M6 22h28" stroke="currentColor" stroke-width="1.0"/><path d="M18 6v28" stroke="currentColor" stroke-width="1.0"/>',
)
const IconEmpty = svgIconG(
  '0 0 40 40',
  '<circle cx="20" cy="20" r="10" stroke="currentColor" stroke-width="1.5" fill="none" stroke-dasharray="4 3"/><path d="M16 18h8M16 22h5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" fill="none" opacity="0.4"/>',
)
const IconImage = svgIconG(
  '0 0 40 40',
  '<rect x="6" y="6" width="28" height="28" rx="2" stroke="currentColor" stroke-width="1.5" fill="none"/><circle cx="14" cy="14" r="3" fill="currentColor" opacity="0.4"/><path d="M6 28l8-8 6 6 4-4 10 10" stroke="currentColor" stroke-width="1.0" stroke-linejoin="round" fill="none" opacity="0.5"/>',
)
const IconInfiniteScroll = svgIconG(
  '0 0 40 40',
  '<rect x="6" y="6" width="28" height="28" rx="2" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M12 14h16M12 20h16M12 26h10" stroke="currentColor" stroke-width="1.0" stroke-linecap="round" fill="none" opacity="0.4"/><path d="M20 30v4l2-2z" fill="currentColor" opacity="0.6"/>',
)
const IconPagination = svgIconG(
  '0 0 40 40',
  '<rect x="4" y="14" width="6" height="12" rx="1" stroke="currentColor" stroke-width="1.0" fill="none" opacity="0.4"/><rect x="12" y="14" width="6" height="12" rx="1" stroke="currentColor" stroke-width="1.0" fill="none" opacity="0.4"/><rect x="20" y="14" width="6" height="12" rx="1" stroke="currentColor" stroke-width="1.5" fill="none"/><rect x="28" y="14" width="6" height="12" rx="1" stroke="currentColor" stroke-width="1.0" fill="none" opacity="0.4"/>',
)
const IconPopover = svgIconG(
  '0 0 40 40',
  '<rect x="6" y="6" width="28" height="20" rx="2" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M16 26l4 6 4-6" fill="currentColor" opacity="0.3"/><path d="M14 14h12M14 18h8" stroke="currentColor" stroke-width="1.0" stroke-linecap="round" fill="none" opacity="0.4"/>',
)
const IconProgress = svgIconG(
  '0 0 40 40',
  '<rect x="6" y="14" width="28" height="6" rx="3" stroke="currentColor" stroke-width="1.0" fill="none" opacity="0.3"/><rect x="6" y="14" width="18" height="6" rx="3" fill="currentColor" opacity="0.5"/><circle cx="20" cy="28" r="4" stroke="currentColor" stroke-width="1.0" fill="none" opacity="0.3"/><path d="M20 28l2 2 3-4" stroke="currentColor" stroke-width="1.0" stroke-linecap="round" stroke-linejoin="round" fill="none" opacity="0.5"/>',
)
const IconResult = svgIconG(
  '0 0 40 40',
  '<circle cx="20" cy="20" r="12" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M14 20l4 4 8-8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
)
const IconSkeleton = svgIconG(
  '0 0 40 40',
  '<rect x="6" y="8" width="28" height="4" rx="2" fill="currentColor" opacity="0.15"/><rect x="6" y="16" width="20" height="4" rx="2" fill="currentColor" opacity="0.15"/><rect x="6" y="24" width="28" height="4" rx="2" fill="currentColor" opacity="0.15"/><rect x="6" y="32" width="14" height="4" rx="2" fill="currentColor" opacity="0.15"/>',
)
const IconTable = svgIconG(
  '0 0 40 40',
  '<rect x="6" y="6" width="28" height="28" rx="2" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M6 14h28M6 22h28M6 30h28M16 6v28" stroke="currentColor" stroke-width="1.0"/>',
)
const IconTableV2 = svgIconG(
  '0 0 40 40',
  '<rect x="6" y="6" width="28" height="28" rx="2" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M6 14h28M6 22h28M16 6v28" stroke="currentColor" stroke-width="1.0"/><path d="M24 26l2 2 4-4" stroke="currentColor" stroke-width="1.0" stroke-linecap="round" stroke-linejoin="round" fill="none" opacity="0.4"/>',
)
const IconTag = svgIconG(
  '0 0 40 40',
  '<path d="M8 12h16l8 8-8 8H8z" stroke="currentColor" stroke-width="1.5" fill="none"/><circle cx="14" cy="20" r="2" fill="currentColor" opacity="0.4"/>',
)
const IconTimeline = svgIconG(
  '0 0 40 40',
  '<path d="M14 8v24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" fill="none"/><circle cx="14" cy="10" r="3" fill="currentColor"/><circle cx="14" cy="20" r="3" stroke="currentColor" stroke-width="1.5" fill="none"/><circle cx="14" cy="30" r="3" fill="currentColor" opacity="0.4"/><path d="M22 10h10M22 20h8M22 30h6" stroke="currentColor" stroke-width="1.0" stroke-linecap="round" fill="none" opacity="0.5"/>',
)
const IconTour = svgIconG(
  '0 0 40 40',
  '<rect x="6" y="8" width="20" height="16" rx="2" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M12 8V6a4 4 0 018 0v2" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M28 16l6 4-6 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
)
const IconTree = svgIconG(
  '0 0 40 40',
  '<circle cx="20" cy="8" r="3" fill="currentColor" opacity="0.6"/><path d="M20 11v5M12 16h16" stroke="currentColor" stroke-width="1.0" stroke-linecap="round" fill="none"/><circle cx="12" cy="20" r="3" fill="currentColor" opacity="0.4"/><circle cx="28" cy="20" r="3" fill="currentColor" opacity="0.4"/><path d="M12 23v5M8 28h8" stroke="currentColor" stroke-width="1.0" stroke-linecap="round" fill="none"/><circle cx="8" cy="32" r="2" fill="currentColor" opacity="0.3"/><circle cx="16" cy="32" r="2" fill="currentColor" opacity="0.3"/>',
)
const IconVirtualized = svgIconG(
  '0 0 40 40',
  '<rect x="6" y="6" width="28" height="28" rx="2" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M6 14h28M6 22h28M6 30h28" stroke="currentColor" stroke-width="0.5" stroke-dasharray="2 2" opacity="0.4"/><path d="M10 10h4M10 18h6M10 26h5" stroke="currentColor" stroke-width="1.0" stroke-linecap="round" fill="none" opacity="0.4"/>',
)
const IconWatermark = svgIconG(
  '0 0 40 40',
  '<rect x="6" y="6" width="28" height="28" rx="2" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M12 18l8-8 8 8M12 26l8-8 8 8" stroke="currentColor" stroke-width="1.0" stroke-linecap="round" stroke-linejoin="round" fill="none" opacity="0.2"/>',
)
const IconAffix = svgIconG(
  '0 0 40 40',
  '<path d="M14 8h12v12l-6 6-6-6z" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M20 26v6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" fill="none"/>',
)
const IconAnchor = svgIconG(
  '0 0 40 40',
  '<path d="M12 10h16M12 18h16M12 26h16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" fill="none"/><circle cx="8" cy="10" r="2" fill="currentColor"/><circle cx="8" cy="18" r="2" fill="currentColor" opacity="0.4"/><circle cx="8" cy="26" r="2" fill="currentColor" opacity="0.4"/>',
)
const IconBacktop = svgIconG(
  '0 0 40 40',
  '<circle cx="20" cy="20" r="12" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M14 22l6-6 6 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
)
const IconBreadcrumb = svgIconG(
  '0 0 40 40',
  '<rect x="6" y="14" width="8" height="12" rx="2" fill="currentColor" opacity="0.4"/><path d="M18 20l2-2 2 2" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" fill="none"/><rect x="26" y="14" width="8" height="12" rx="2" stroke="currentColor" stroke-width="1.5" fill="none"/>',
)
const IconDropdown = svgIconG(
  '0 0 40 40',
  '<rect x="6" y="8" width="28" height="10" rx="2" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M20 14l3 3 3-3" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" fill="none"/><rect x="6" y="20" width="28" height="12" rx="2" stroke="currentColor" stroke-width="1.0" fill="none" opacity="0.4"/><path d="M12 24h16M12 28h10" stroke="currentColor" stroke-width="1.0" stroke-linecap="round" fill="none" opacity="0.3"/>',
)
const IconMenu = svgIconG(
  '0 0 40 40',
  '<rect x="6" y="6" width="10" height="28" rx="2" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M8 12h6M8 18h6M8 24h6" stroke="currentColor" stroke-width="1.0" stroke-linecap="round" fill="none" opacity="0.5"/><rect x="18" y="6" width="16" height="28" rx="2" stroke="currentColor" stroke-width="1.0" fill="none" opacity="0.3"/>',
)
const IconPageHeader = svgIconG(
  '0 0 40 40',
  '<path d="M12 14l-4 6 4 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/><path d="M8 20h12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" fill="none"/><rect x="6" y="6" width="28" height="28" rx="2" stroke="currentColor" stroke-width="1.0" fill="none" opacity="0.3"/>',
)
const IconSteps = svgIconG(
  '0 0 40 40',
  '<circle cx="8" cy="20" r="4" fill="currentColor" opacity="0.5"/><path d="M12 20h6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" fill="none"/><circle cx="22" cy="20" r="4" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M26 20h6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" fill="none" opacity="0.4"/><circle cx="36" cy="20" r="2" fill="currentColor" opacity="0.2"/>',
)
const IconTabs = svgIconG(
  '0 0 40 40',
  '<rect x="6" y="6" width="28" height="28" rx="2" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M6 14h28" stroke="currentColor" stroke-width="1.0"/><rect x="8" y="8" width="10" height="6" rx="1" fill="currentColor" opacity="0.2"/><rect x="22" y="8" width="8" height="6" rx="1" fill="currentColor" opacity="0.1"/>',
)
const IconAlert = svgIconG(
  '0 0 40 40',
  '<path d="M20 8L34 30H6z" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M20 18v6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" fill="none"/><circle cx="20" cy="27" r="1" fill="currentColor"/>',
)
const IconDialog = svgIconG(
  '0 0 40 40',
  '<rect x="6" y="6" width="28" height="28" rx="2" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M6 14h28" stroke="currentColor" stroke-width="1.0"/><path d="M30 10l-2 2M28 10l2 2" stroke="currentColor" stroke-width="1.0" stroke-linecap="round" fill="none" opacity="0.5"/>',
)
const IconDrawer = svgIconG(
  '0 0 40 40',
  '<rect x="16" y="6" width="18" height="28" rx="2" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M16 14h18" stroke="currentColor" stroke-width="1.0"/><path d="M6 10h6M6 20h6M6 30h6" stroke="currentColor" stroke-width="1.0" stroke-linecap="round" fill="none" opacity="0.3"/>',
)
const IconLoading = svgIconG(
  '0 0 40 40',
  '<circle cx="20" cy="20" r="10" stroke="currentColor" stroke-width="1.5" fill="none" stroke-dasharray="8 6" opacity="0.6"/><circle cx="20" cy="20" r="4" fill="currentColor" opacity="0.3"/>',
)
const IconMessage = svgIconG(
  '0 0 40 40',
  '<rect x="6" y="10" width="28" height="20" rx="4" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M6 14l14 8 14-8" stroke="currentColor" stroke-width="1.0" fill="none" opacity="0.5"/>',
)
const IconMessageBox = svgIconG(
  '0 0 40 40',
  '<rect x="6" y="6" width="28" height="28" rx="2" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M6 14h28" stroke="currentColor" stroke-width="1.0"/><circle cx="20" cy="24" r="1.5" fill="currentColor"/><path d="M20 16v6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" fill="none"/>',
)
const IconNotification = svgIconG(
  '0 0 40 40',
  '<path d="M12 14a8 8 0 0116 0v8l4 4H8l4-4z" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M17 30a3 3 0 006 0" stroke="currentColor" stroke-width="1.0" fill="none"/>',
)
const IconPopconfirm = svgIconG(
  '0 0 40 40',
  '<rect x="6" y="6" width="28" height="16" rx="2" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M16 22l4 6 4-6" fill="currentColor" opacity="0.2"/><circle cx="20" cy="14" r="1.5" fill="currentColor"/><path d="M20 10v2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" fill="none"/>',
)
const IconTooltip = svgIconG(
  '0 0 40 40',
  '<rect x="6" y="6" width="28" height="16" rx="2" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M16 22l4 6 4-6" fill="currentColor" opacity="0.3"/><path d="M14 12h12M14 16h8" stroke="currentColor" stroke-width="1.0" stroke-linecap="round" fill="none" opacity="0.4"/>',
)
const IconDivider = svgIconG(
  '0 0 40 40',
  '<path d="M6 20h10M24 20h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" fill="none" opacity="0.4"/><circle cx="20" cy="20" r="2" fill="currentColor" opacity="0.5"/>',
)

interface ComponentInfo {
  name: string
  desc: string
  icon: any
  route?: string
}

interface CategoryInfo {
  name: string
  components: ComponentInfo[]
}

const componentCategories: CategoryInfo[] = [
  {
    name: 'Basic 基础组件',
    components: [
      { name: 'Button 按钮', desc: '常用的操作按钮', icon: IconButton, route: '/button' },
      { name: 'Border 边框', desc: '对边框进行统一规范', icon: IconBorder },
      {
        name: 'Color 色彩',
        desc: 'Element Plus 使用一套特定的调色板来指定视觉样式',
        icon: IconColor,
      },
      {
        name: 'Container 布局容器',
        desc: '用于布局的容器组件，方便快速搭建页面的基本结构',
        icon: IconContainer,
      },
      { name: 'Icon 图标', desc: 'Element Plus 提供了一套常用的图标集合', icon: IconIcon },
      { name: 'Layout 布局', desc: '通过基础的 24 分栏，迅速简便地创建布局', icon: IconLayout },
      { name: 'Link 链接', desc: '文字超链接', icon: IconLink },
      { name: 'Text 文本', desc: '用于文本的显示', icon: IconText },
      { name: 'Scrollbar 滚动条', desc: '用于替换浏览器原生滚动条', icon: IconScrollbar },
      { name: 'Space 间距', desc: '设置组件之间的间距', icon: IconSpace },
      { name: 'Typography 排版', desc: '用于文字排版', icon: IconTypography },
      { name: 'Overflow 溢出', desc: '用于隐藏溢出内容并显示省略号', icon: IconOverflow },
    ],
  },
  {
    name: 'Configuration 配置组件',
    components: [
      {
        name: 'ConfigProvider 全局配置',
        desc: '用于全局配置 Element Plus 组件',
        icon: IconConfigProvider,
      },
    ],
  },
  {
    name: 'Form 表单组件',
    components: [
      { name: 'Autocomplete 自动补全', desc: '根据输入内容提供建议选项', icon: IconAutocomplete },
      {
        name: 'Cascader 级联选择器',
        desc: '当一个数据集合有清晰的层级结构时，可通过级联选择器逐级查看并选择',
        icon: IconCascader,
      },
      { name: 'Checkbox 多选框', desc: '一组备选项中进行多选', icon: IconCheckbox },
      { name: 'ColorPicker 颜色选择器', desc: '用于颜色选择，支持多种格式', icon: IconColorPicker },
      { name: 'DatePicker 日期选择器', desc: '用于选择或输入日期', icon: IconDatePicker },
      {
        name: 'DateTimePicker 日期时间选择器',
        desc: '在同一个选择器里选择日期和时间',
        icon: IconDateTimePicker,
      },
      {
        name: 'Form 表单',
        desc: '由输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据',
        icon: IconForm,
      },
      { name: 'Input 输入框', desc: '通过鼠标或键盘输入字符', icon: IconInput },
      { name: 'InputNumber 计数器', desc: '仅可以输入数值的输入框', icon: IconInputNumber },
      { name: 'Mention 提及', desc: '用于在输入框中提及某人或某事', icon: IconMention },
      { name: 'Radio 单选框', desc: '在一组备选项中进行单选', icon: IconRadio },
      { name: 'Rate 评分', desc: '评分组件', icon: IconRate },
      { name: 'Select 选择器', desc: '当选项过多时，使用下拉菜单展示并选择', icon: IconSelect },
      { name: 'SelectV2 虚拟列表选择器', desc: '使用虚拟列表的选择器', icon: IconSelectV2 },
      { name: 'Slider 滑块', desc: '通过拖动滑块在一个固定区间内进行选择', icon: IconSlider },
      { name: 'Switch 开关', desc: '表示两种相互对立的状态间的切换', icon: IconSwitch },
      { name: 'TimePicker 时间选择器', desc: '用于选择或输入时间', icon: IconTimePicker },
      { name: 'TimeSelect 时间选择', desc: '使用固定时间间隔的选择器', icon: IconTimeSelect },
      { name: 'Transfer 穿梭框', desc: '双栏穿梭选择框', icon: IconTransfer },
      { name: 'TreeSelect 树形选择', desc: '树形结构的选择器', icon: IconTreeSelect },
      { name: 'Upload 上传', desc: '通过点击或者拖拽上传文件', icon: IconUpload },
    ],
  },
  {
    name: 'Data 数据组件',
    components: [
      {
        name: 'Avatar 头像',
        desc: '用图标、图片或者字符的形式展示用户或事物信息',
        icon: IconAvatar,
      },
      { name: 'Badge 徽标', desc: '出现在按钮、图标附近的数字或者状态标记', icon: IconBadge },
      { name: 'Calendar 日历', desc: '显示日期', icon: IconCalendar },
      { name: 'Card 卡片', desc: '卡片容器', icon: IconCard },
      { name: 'Carousel 走马灯', desc: '一组轮播的区域', icon: IconCarousel },
      { name: 'Collapse 折叠面板', desc: '通过折叠面板收纳内容区域', icon: IconCollapse },
      { name: 'Descriptions 描述列表', desc: '成组展示多个只读字段', icon: IconDescriptions },
      { name: 'Empty 空状态', desc: '空状态时的占位提示', icon: IconEmpty },
      {
        name: 'Image 图片',
        desc: '图片容器，在保留原生 img 的特性基础上，支持懒加载等功能',
        icon: IconImage,
      },
      {
        name: 'InfiniteScroll 无限滚动',
        desc: '滚动至底部时请求加载更多数据',
        icon: IconInfiniteScroll,
      },
      { name: 'Pagination 分页', desc: '当数据量过多时，使用分页分解数据', icon: IconPagination },
      {
        name: 'Popover 弹出气泡',
        desc: '点击/鼠标移入元素，弹出气泡式的卡片浮层',
        icon: IconPopover,
      },
      {
        name: 'Progress 进度条',
        desc: '用于展示操作进度，告知用户当前状态和预期',
        icon: IconProgress,
      },
      { name: 'Result 结果', desc: '用于反馈处理结果', icon: IconResult },
      {
        name: 'Skeleton 骨架屏',
        desc: '在需要等待加载内容的位置设置一个占位图形',
        icon: IconSkeleton,
      },
      { name: 'Table 表格', desc: '用于展示多条结构类似的数据', icon: IconTable },
      { name: 'TableV2 虚拟表格', desc: '基于虚拟列表的高性能表格', icon: IconTableV2 },
      { name: 'Tag 标签', desc: '用于标记和选择', icon: IconTag },
      { name: 'Timeline 时间线', desc: '用于展示一系列信息按时间顺序排列', icon: IconTimeline },
      { name: 'Tour 漫游式引导', desc: '用于分步引导用户了解产品功能', icon: IconTour },
      { name: 'Tree 树形控件', desc: '展示层级结构', icon: IconTree },
      {
        name: 'Virtualized 虚拟化',
        desc: '虚拟化列表/表格，用于渲染大量数据',
        icon: IconVirtualized,
      },
      { name: 'Watermark 水印', desc: '在页面或组件上添加水印', icon: IconWatermark },
    ],
  },
  {
    name: 'Navigation 导航组件',
    components: [
      { name: 'Affix 固钉', desc: '将页面元素固定在特定可视区域', icon: IconAffix },
      { name: 'Anchor 锚点', desc: '用于跳转到页面指定位置', icon: IconAnchor },
      { name: 'Backtop 回到顶部', desc: '返回页面顶部的操作按钮', icon: IconBacktop },
      {
        name: 'Breadcrumb 面包屑',
        desc: '显示当前页面的路径，快速返回之前的任意页面',
        icon: IconBreadcrumb,
      },
      { name: 'Dropdown 下拉菜单', desc: '将动作或菜单折叠到下拉菜单中', icon: IconDropdown },
      { name: 'Menu 导航菜单', desc: '为网站提供导航功能的菜单', icon: IconMenu },
      {
        name: 'PageHeader 页头',
        desc: '声明当前页面主题及返回上级页面的功能',
        icon: IconPageHeader,
      },
      { name: 'Steps 步骤条', desc: '引导用户按照流程完成任务的分步导航条', icon: IconSteps },
      { name: 'Tabs 标签页', desc: '分隔内容上有关联但属于不同类别的数据集合', icon: IconTabs },
    ],
  },
  {
    name: 'Feedback 反馈组件',
    components: [
      { name: 'Alert 警告', desc: '页面中重要的警示信息', icon: IconAlert },
      {
        name: 'Dialog 对话框',
        desc: '在保留当前页面状态的情况下，告知信息并承载相关的操作',
        icon: IconDialog,
      },
      { name: 'Drawer 抽屉', desc: '屏幕边缘滑出的浮层面板', icon: IconDrawer },
      { name: 'Loading 加载', desc: '数据加载时的等待状态', icon: IconLoading },
      { name: 'Message 消息提示', desc: '常用于主动操作后的反馈提示', icon: IconMessage },
      {
        name: 'MessageBox 消息框',
        desc: '模拟系统的消息提示框而实现的全模态对话框',
        icon: IconMessageBox,
      },
      {
        name: 'Notification 通知',
        desc: '悬浮出现在页面角落，显示全局的通知提醒消息',
        icon: IconNotification,
      },
      { name: 'Popconfirm 气泡确认框', desc: '点击元素，弹出气泡确认框', icon: IconPopconfirm },
      { name: 'Progress 进度条', desc: '用于展示操作进度', icon: IconProgress },
      { name: 'Tooltip 文字提示', desc: '常见的文字提示气泡框', icon: IconTooltip },
      { name: 'Tour 漫游式引导', desc: '用于分步引导用户了解产品功能', icon: IconTour },
    ],
  },
  {
    name: 'Others 其他组件',
    components: [
      { name: 'Backtop 回到顶部', desc: '返回页面顶部的操作按钮', icon: IconBacktop },
      { name: 'Divider 分割线', desc: '区隔内容的分割线', icon: IconDivider },
      { name: 'Text 文本', desc: '用于文本的显示', icon: IconText },
    ],
  },
]

const handleClick = (comp: ComponentInfo) => {
  if (comp.route) {
    router.push(comp.route)
  }
}
</script>

<style scoped>
.vp-doc {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 32px 80px;
}

.vp-doc > h1 {
  font-size: 32px;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 8px;
  line-height: 1.4;
  color: var(--el-text-color-primary);
}

.vp-doc > p {
  font-size: 16px;
  color: var(--el-text-color-secondary);
  margin-bottom: 48px;
  margin-top: 0;
  line-height: 1.6;
}

.component-category {
  margin-bottom: 36px;
}

.category-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.category-header h2 {
  font-size: 20px;
  font-weight: 600;
  color: var(--el-text-color-primary);
  margin: 0;
  line-height: 1.4;
}

.category-header :deep(.el-badge) {
  margin-top: 2px;
}

.category-header :deep(.el-badge__content.is-fixed) {
  top: 4px;
  right: calc(-8px + 1px);
}

.component-card-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}

.component-card {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid var(--el-border-color-lighter);
  background: var(--el-bg-color);
  text-decoration: none;
  transition: all 0.2s ease;
  cursor: pointer;
}

.component-card:hover {
  border-color: var(--el-color-primary);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
}

.card-icon-box {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
  transition: all 0.2s ease;
}

.component-card:hover .card-icon-box {
  background: var(--el-color-primary);
  color: #ffffff;
}

.component-icon {
  width: 24px;
  height: 24px;
}

.card-text {
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
  flex: 1;
}

.card-title {
  font-size: 14px;
  font-weight: 500;
  color: var(--el-text-color-primary);
  line-height: 1.4;
}

.card-desc {
  font-size: 12px;
  color: var(--el-text-color-secondary);
  line-height: 1.4;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

@media (max-width: 768px) {
  .vp-doc {
    padding: 0 16px 40px;
  }

  .component-card-grid {
    grid-template-columns: 1fr;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .component-card-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
