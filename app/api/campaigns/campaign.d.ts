export type Campaign = {
  account_descr: string | null
  account_name: string
  average_ir: number | null
  banner_image: string | null
  banner_image_url: string
  broken_reports: number
  campaign_target_crdate: string
  campaign_target_enddate: string | null
  campaigns_hidden_from_pp: boolean | null
  can_be_deleted: boolean
  completed: number
  crdate: string
  currency_code: string
  currency_name: string
  descr: string | null
  display: string
  disqualified: number
  disqualified_1: number
  disqualified_2: number
  disqualified_3: number
  disqualified_4: number
  editable: boolean
  encodify_id: number
  first_went_live_at: string | null
  id: number
  incidence_rate: number
  incomplete: number
  instance_code: string
  instance_descr: string
  instance_id: number
  instance_name: string
  invitation_duration: number
  invitation_image: string
  invitation_image_url: string
  invitation_text: string
  ir_color: string
  ir_tolerance_exceeded: boolean | null
  logo_image: string | null
  logo_image_url: string
  loi_color: string
  loi_tolerance_exceeded: boolean | null
  max_completes_total: number
  median_loi: number | null
  name: string
  panels: Panel[]
  project_descr: string | null
  project_id: number
  project_name: string
  qualified: number
  question_count: number
  quota_full: number
  screened: number
  shown_invite: number
  skipped: number
  stars: number
  start_date: string | null
  start_time: string | null
  started: number
  status: string
  status_text: string
  suppressed: number
  survey_tool: string | null
  thank_you_image: string
  thank_you_image_url: string
  type: string
  type_name: string
  under_consolidation: boolean | null
  user_incidence_rate: number
  viewed: number
}

type Panel = {
  code: string
  color_primary: string
  font_color_primary: string
  initialism: string
  name: string
  wb_button_color: string
  wb_button_text_color: string
}
