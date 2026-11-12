import { motion } from "framer-motion"
import {
  Briefcase,
  ShieldCheck,
  Cpu,
  CheckCircle2,
  ArrowDown,
  Layers,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { BackgroundPattern } from "@/components/BackgroundPattern"

export default function App() {
  const fadeInUp = {
    initial: { opacity: 0, y: 35 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.6, ease: "easeOut" },
  }

  // 나) 보여 줄 것 세 가지 (세 덩어리)
  const threePillars = [
    {
      title: "기업 재무 및 관리 회계 총괄",
      icon: Briefcase,
      items: [
        "15년 이상의 법인 재무·회계 총괄 경력 보유 (재무기획·분석(FP&A), 결산 마감, IFRS/US-GAAP 연결 결산, 현금흐름 최적화)",
        "월간 플래시 캘(Flash Call), 운영 KPI 스코어카드 관리, 원가(COGS) 분석 및 운전자본 최적화 총괄",
        "여러가지 포인트를 활용한 예산(Capital Budgeting) 평가",
      ],
    },
    {
      title: "내부 통제 및 리스크 관리",
      icon: ShieldCheck,
      items: [
        "한국 내부회계관리제도 정비 및 기업 표준 문서화 프레임워크 구축",
        "규제 준수 감사 대응 및 사내 재무 통제 구조 고도화",
      ],
    },
    {
      title: "시스템 인프라 및 프로세스 혁신",
      icon: Cpu,
      items: [
        "SAP FI/CO 모듈 구축 및 커스텀 원장 리포팅, SAP Business One 통합 비즈니스 플랫폼 운용 고도화",
      ],
    },
  ]

  // 다) 걸어온 길 (시기 순서대로 5줄)
  const milestones = [
    "15년 이상의 법인 재무·회계 총괄 경력 보유",
    "재무기획·분석(FP&A), 결산 마감, IFRS/US-GAAP 연결 결산, 현금흐름 최적화",
    "월간 플래시 캘(Flash Call), 운영 KPI 스코어카드 관리, 원가(COGS) 분석 및 운전자본 최적화 총괄",
    "한국 내부회계관리제도 정비 및 기업 표준 문서화 프레임워크 구축, 규제 준수 감사 대응",
    "SAP FI/CO 모듈 구축 및 커스텀 원장 리포팅, SAP Business One 통합 비즈니스 플랫폼 운용 고도화",
  ]

  // 라) 할 수 있는 것 (잘하는 것을 쉼표로 나열)
  const capabilitiesList = [
    "재무기획·분석(FP&A)",
    "결산 마감",
    "IFRS/US-GAAP 연결 결산",
    "현금흐름 최적화",
    "월간 플래시 캘(Flash Call)",
    "운영 KPI 스코어카드 관리",
    "원가(COGS) 분석",
    "운전자본 최적화",
    "예산(Capital Budgeting) 평가",
    "한국 내부회계관리제도 정비",
    "기업 표준 문서화 프레임워크 구축",
    "규제 준수 감사 대응",
    "사내 재무 통제 구조 고도화",
    "SAP FI/CO 모듈 구축",
    "커스텀 원장 리포팅",
    "SAP Business One 통합 비즈니스 플랫폼 운용 고도화",
  ]

  const capabilitiesCommaSeparated = capabilitiesList.join(", ")

  return (
    <div className="min-h-screen bg-[#090a0d] text-zinc-200 antialiased selection:bg-[#a3e635] selection:text-black">
      {/* Top Subtle Moving Pattern */}
      <BackgroundPattern />

      {/* Main Wrapper */}
      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* ========================================================= */}
        {/* 가) 맨 위 한 줄 소개 — 제가 어떤 사람인지 한 문장으로 */}
        {/* ========================================================= */}
        <header className="min-h-[85vh] flex flex-col justify-center pt-20 pb-28 md:py-36">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Role Badge */}
            <div className="inline-flex items-center gap-2">
              <Badge
                variant="subtle"
                className="px-3.5 py-1.5 text-xs sm:text-sm font-semibold tracking-wide border-[#a3e635]/40 text-[#a3e635] bg-[#a3e635]/10"
              >
                재무 임원
              </Badge>
            </div>

            {/* Main Headline (한 줄 소개 문장) */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-zinc-100 leading-[1.2] break-keep">
              "구조적 엄밀함과 전략적 통찰로 가치를 창조하는{" "}
              <span className="text-[#a3e635]">파이낸스 전문가</span>,
              그리고 삶의 균형을 가꾸는 항해자"
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-zinc-300 leading-relaxed max-w-3xl font-normal break-keep">
              안녕하세요. 재무와 경영 관리의 최전선에서 기업의 지속 가능한 성장과 효율성을 설계하는 재무 임원입니다. 숫자가 지닌 엄밀한 사실 속에서 비즈니스의 해답을 찾고, 원칙과 유연함을 조화롭게 다루는 것을 일의 즐거움으로 삼고 있습니다.
            </p>

            {/* Navigation Anchor Buttons */}
            <div className="pt-4 flex flex-wrap gap-3">
              <a href="#showcase">
                <Button
                  variant="default"
                  size="lg"
                  className="bg-[#a3e635] text-black hover:bg-[#bef264] font-bold text-sm sm:text-base flex items-center gap-2 shadow-sm shadow-[#a3e635]/20"
                >
                  <span>전문 영역 확인하기</span>
                  <ArrowDown className="w-4 h-4 text-black" />
                </Button>
              </a>
              <a href="#capabilities">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-zinc-700 bg-zinc-900/40 text-zinc-200 hover:text-[#a3e635] hover:border-[#a3e635]/50 text-sm sm:text-base"
                >
                  보유 역량 목록
                </Button>
              </a>
            </div>
          </motion.div>
        </header>

        <Separator className="bg-zinc-800/80 my-4" />

        {/* ========================================================= */}
        {/* 나) 보여 줄 것 세 가지 — 제가 할 수 있는 일을 세 덩어리로 */}
        {/* ========================================================= */}
        <section id="showcase" className="py-24 md:py-32 scroll-mt-10">
          <motion.div {...fadeInUp} className="space-y-4 mb-14">
            <div className="inline-flex items-center gap-2 text-[#a3e635] text-xs font-semibold uppercase tracking-wider">
              <Layers className="w-4 h-4 text-[#a3e635]" />
              <span>전문성 및 커리어</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-100 break-keep">
              보여 줄 것 세 가지
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-2xl break-keep">
              기업 재무와 회계, 내부 통제, 인프라 혁신을 아우르는 세 가지 핵심 업무 영역입니다.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {threePillars.map((pillar, idx) => {
              const Icon = pillar.icon
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: idx * 0.15, ease: "easeOut" }}
                  className="h-full"
                >
                  <Card className="h-full border border-zinc-800/80 bg-[#12141a]/90 hover:border-[#a3e635]/40 transition-colors duration-300 flex flex-col">
                    <CardHeader className="p-6 pb-4">
                      <div className="w-11 h-11 rounded-lg bg-[#a3e635]/10 border border-[#a3e635]/20 flex items-center justify-center mb-4 text-[#a3e635]">
                        <Icon className="w-5 h-5 text-[#a3e635]" />
                      </div>
                      <CardTitle className="text-lg sm:text-xl font-bold text-zinc-100 tracking-tight leading-snug break-keep">
                        {pillar.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 pt-2 flex-1">
                      <ul className="space-y-3.5">
                        {pillar.items.map((item, itemIdx) => (
                          <li
                            key={itemIdx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 leading-relaxed break-keep"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#a3e635] mt-2 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </section>

        <Separator className="bg-zinc-800/80 my-4" />

        {/* ========================================================= */}
        {/* 다) 걸어온 길 — 시기 순서대로 네다섯 줄 */}
        {/* ========================================================= */}
        <section className="py-24 md:py-32">
          <motion.div {...fadeInUp} className="space-y-4 mb-14">
            <div className="inline-flex items-center gap-2 text-[#a3e635] text-xs font-semibold uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4 text-[#a3e635]" />
              <span>커리어 여정</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-100 break-keep">
              걸어온 길
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-2xl break-keep">
              재무 총괄부터 통제 체계 구축과 플랫폼 운용까지 단계적으로 축적해 온 실무 발자취입니다.
            </p>
          </motion.div>

          <Card className="border border-zinc-800/80 bg-[#12141a]/90 p-6 sm:p-8 md:p-10">
            <div className="relative pl-6 sm:pl-8 border-l border-zinc-800 space-y-8 sm:space-y-10">
              {milestones.map((milestone, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.45, delay: idx * 0.1, ease: "easeOut" }}
                  className="relative group"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#090a0d] border-2 border-[#a3e635]" />
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                    <span className="text-xs font-mono text-[#a3e635] font-semibold tracking-wider shrink-0">
                      STEP 0{idx + 1}
                    </span>
                    <p className="text-sm sm:text-base text-zinc-200 leading-relaxed font-medium break-keep">
                      {milestone}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        </section>

        <Separator className="bg-zinc-800/80 my-4" />

        {/* ========================================================= */}
        {/* 라) 할 수 있는 것 — 잘하는 것을 쉼표로 나열 */}
        {/* ========================================================= */}
        <section id="capabilities" className="py-24 md:py-32 scroll-mt-10">
          <motion.div {...fadeInUp} className="space-y-4 mb-14">
            <div className="inline-flex items-center gap-2 text-[#a3e635] text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-[#a3e635]" />
              <span>전문 역량 요약</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-100 break-keep">
              할 수 있는 것
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-2xl break-keep">
              실무에서 수행해 온 핵심 역량 및 수행 과업 목록입니다.
            </p>
          </motion.div>

          <Card className="border border-zinc-800/80 bg-[#12141a]/90 p-6 sm:p-8 md:p-10 space-y-8">
            {/* 1. 쉼표로 나열된 텍스트 본문 */}
            <div className="space-y-3">
              <h3 className="text-xs font-semibold text-[#a3e635] tracking-wider uppercase">
                역량 목록 (쉼표 나열)
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-zinc-200 leading-relaxed break-keep font-normal">
                {capabilitiesCommaSeparated}
              </p>
            </div>

            <Separator className="bg-zinc-800/80" />

            {/* 2. 개별 뱃지 형태 시각화 */}
            <div className="space-y-3">
              <h3 className="text-xs font-semibold text-zinc-400 tracking-wider uppercase">
                핵심 키워드
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-2.5">
                {capabilitiesList.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="border-zinc-800 bg-[#0e1015] text-zinc-300 hover:border-[#a3e635]/60 hover:text-[#a3e635] text-xs sm:text-sm py-1.5 px-3 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
        </section>

        {/* Footer */}
        <footer className="pt-12 pb-20 border-t border-zinc-800/80 text-center text-xs text-zinc-400">
          <p className="break-keep">
            재무 임원 프로필 웹페이지
          </p>
        </footer>

      </div>
    </div>
  )
}
