export type Campaign = {
  account_default_base_domain_id: null | number
  account_descr: null | string
  account_id: number
  account_manager_email: null | string
  account_manager_firstname: null | string
  account_manager_id: null | number
  account_manager_lastname: null | string
  account_name: string
  actual_loi_ir_calc_at: string
  allow_sharing_url: null | boolean
  audience_type_id: null | number
  audience_type_ids: number[]
  auto_generated: boolean
  average_ir: null | number
  banner_image: null | string
  banner_image_file: null | string
  banner_image_height: null | number
  banner_image_mime: null | string
  banner_image_size: null | number
  banner_image_url: string
  banner_image_width: null | number
  batch_timestamp: null | string
  campaign_manager_email: null | string
  campaign_manager_firstname: null | string
  campaign_manager_id: null | number
  campaign_manager_lastname: null | string
  campaign_requirement: null | string
  campaign_retake_allowed: boolean
  check_ah_location: boolean
  check_browser_and_device_client_side: boolean
  check_browser_and_device_server_side: boolean
  check_for_duplicates: boolean
  check_in_vpn_list: boolean
  check_ip_duplicates: boolean
  check_with_clean_id: boolean
  clean_id_level: string
  cloned_from: null | number
  competition_entry_only: boolean
  completed: number
  completion_redirect_other_url: null | string
  completion_redirect_url_id: null | number
  cost_avg: number
  cost_max: number
  cost_min: number
  country: string
  country_code: string
  country_currency: string
  cpi: null | number
  cpi_currency_code: null | string
  crdate: string
  criteria: null | string
  currency_code: string
  currency_name: string
  dashboard_default_id: number
  dashboard_summary_id: number
  dashboard_type_id: number
  default_country: DefaultCountry
  default_topup_domain_id: number
  deleted_at: null | string
  descr: null | string
  display_as: null | string
  display_dashboard_settings: boolean
  disqualified: number
  disqualified_1: number
  disqualified_2: number
  disqualified_3: number
  disqualified_4: number
  editable: boolean
  encodify_id: null | number
  end_date: null | string
  end_time: null | string
  excluded_group_id: null | number
  exposed_group_id: null | number
  first_went_live_at: null | string
  fixed_day: null | number
  fixed_month: null | number
  followup_campaign_id: null | number
  for_fraud_group_clearing: null | boolean
  gav_link_suffix: null | string
  gav_network: null | string
  gav_retailer_url: null | string
  guid: string
  gwv_pixel: null | string
  gwv_url: null | string
  has_location_dropdown: boolean
  has_tag_quotas: boolean
  hide_campaign_complete_status: boolean
  hide_campaign_dashboard: boolean
  hide_campaign_demographics: boolean
  hide_crosstabs: boolean
  hide_from_feed: null | boolean
  id: number
  incomplete: number
  insight_active: null | boolean
  insight_image: null | string
  insight_image_file: null | string
  insight_image_height: null | number
  insight_image_mime: null | string
  insight_image_size: null | number
  insight_image_url: null | string
  insight_image_width: null | number
  insight_question_id: null | number
  insight_segments: null | string
  insight_show_percentages: null | boolean
  insight_type: null | string
  instance_code: string
  instance_descr: string
  instance_id: number
  instance_name: string
  invitation_call_out: null | string
  invitation_callout_category_id: number
  invitation_callout_category_name: string
  invitation_callout_category_text: string
  invitation_duration: null | number
  invitation_image: null | string
  invitation_image_file: null | string
  invitation_image_height: null | number
  invitation_image_mime: null | string
  invitation_image_size: null | number
  invitation_image_url: null | string
  invitation_image_width: null | number
  invitation_max_questions: null | number
  invitation_min_questions: null | number
  invitation_name: null | string
  invitation_terms: null | string
  invitation_text: null | string
  invoice_id: string
  ir_tolerance_exceeded: null | boolean
  is_approved: null | boolean
  is_profile_connect: boolean
  is_public: null | boolean
  is_showcase: null | boolean
  is_testing: null | boolean
  lastchange: string
  latest_email_list_file_generation_request: null | string
  limits_work_off_completes: null | number
  limits_work_off_starts: null | number
  limits_work_off_starts_unbounded: null | boolean
  logo_image: null | string
  logo_image_file: null | string
  logo_image_height: null | number
  logo_image_mime: null | string
  logo_image_size: null | number
  logo_image_url: string
  logo_image_width: null | number
  loi_tolerance_exceeded: null | boolean
  max_budget_day: null | number
  max_budget_total: null | number
  max_completes_day: null | number
  max_completes_total: number
  median_loi: null | number
  name: string
  notify_account_manager_on_soft_launch_end: boolean
  notify_admin_api_on_complete: null | boolean
  notify_project_manager_on_soft_launch_end: boolean
  on_the_fly_rid_generation: boolean
  override_esurvey_payment_automation: null | boolean
  pass_age_gender_location_in_start_url: null | boolean
  payment_links_secured_by_hash: null | boolean
  payout: null | number
  platform: null | string
  platform_android: boolean
  platform_desktop: boolean
  platform_id: number
  platform_ios: boolean
  platform_mobile: boolean
  platform_tablet: boolean
  platform_widget: boolean
  previewed: boolean
  previewed_at: null | string
  priority: number
  profile_connect_cost: null | number
  profile_connect_image: null | string
  profile_connect_image_file: null | string
  profile_connect_image_height: null | number
  profile_connect_image_mime: null | string
  profile_connect_image_size: null | number
  profile_connect_image_width: null | number
  profile_connect_name: null | string
  profile_connect_search_text: null | string
  project_id: number
  project_name: string
  project_type_id: number
  public_url: null | string
  qualified: number
  question_count: number
  quota_cell_completed: number
  quota_cell_total: number
  quota_full: number
  quota_id: null | number
  quota_is_disabled: boolean
  quota_is_interlocked: boolean
  quota_mode: null | string
  quota_name: null | string
  read_terms: boolean
  redisplay_allowed: boolean
  repeat_freq: null | number
  repeat_per: null | string
  repeat_type: null | string
  screened: number
  search_text: string
  send_notification_on_soft_launch_end: boolean
  sf_project_id: null | string
  sfid: null | string
  shareability_url: string
  shown_invite: number
  skip_invitation: null | boolean
  skip_thank_you: null | boolean
  skipped: number
  soft_launch_active: null | boolean
  soft_launch_target: null | number
  stars: number
  start_date: null | string
  start_time: null | string
  started: number
  status: string
  status_text: string
  suppressed: number
  survey_panel: null | string
  survey_project: null | string
  survey_tool: null | string
  survey_tool_theme_id: null | number
  survey_url: null | string
  survey_vendor: null | string
  target_guid: string
  target_id: number
  target_lastchange: string
  tenant_id: number
  thank_you_has_rating: boolean
  thank_you_image: null | string
  thank_you_image_file: null | string
  thank_you_image_height: null | number
  thank_you_image_mime: null | string
  thank_you_image_size: null | number
  thank_you_image_url: null | string
  thank_you_image_width: null | number
  thank_you_message: null | string
  throttle_budget: null | number
  throttle_budget_per: null | string
  throttle_freq: null | number
  throttle_per: null | string
  timezone: string
  topup_domain_id: number
  tracking_partner_id: null | number
  tracking_pixel: null | string
  type: string
  type_name: string
  type_of_campaign_id: number
  under_consolidation: null | boolean
  universal_payment_links: null | boolean
  universal_redirects_3var: null | boolean
  use_tracking: boolean
  user_email: string
  user_firstname: string
  user_id: number
  user_id_who_approved: null | number
  user_incidence_rate: null | number
  user_lastname: string
  video: null | string
  video_delay: null | number
  videoid: null | string
  viewed: number
}

type DefaultCountry = {
  country_code: string
  country_name: string
  id: number
  instance_id: number
  instance_name: string
}
