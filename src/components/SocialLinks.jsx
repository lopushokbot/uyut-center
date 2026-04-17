import { SOCIAL_LINKS } from "../data/siteData";

const ICONS = {
  whatsapp: (
    <svg viewBox="0 0 24 24" aria-hidden="true" width="20" height="20">
      <path
        fill="currentColor"
        d="M20.52 3.48A11.86 11.86 0 0 0 12.04 0C5.46 0 .13 5.33.13 11.9c0 2.1.55 4.15 1.6 5.96L0 24l6.3-1.64a11.87 11.87 0 0 0 5.73 1.46h.01c6.58 0 11.9-5.33 11.9-11.9 0-3.18-1.24-6.17-3.42-8.44ZM12.04 21.6h-.01a9.74 9.74 0 0 1-4.96-1.36l-.36-.21-3.74.97 1-3.64-.23-.37a9.72 9.72 0 0 1-1.5-5.19c0-5.38 4.38-9.76 9.79-9.76a9.7 9.7 0 0 1 6.91 2.86 9.7 9.7 0 0 1 2.86 6.91c0 5.38-4.38 9.79-9.76 9.79Zm5.36-7.3c-.29-.15-1.73-.85-2-.95-.27-.1-.47-.15-.67.15s-.77.95-.94 1.15c-.17.2-.35.22-.64.07-.29-.15-1.24-.46-2.36-1.46-.87-.77-1.46-1.73-1.63-2.02-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.29-1.04 1.02-1.04 2.49s1.06 2.89 1.21 3.08c.15.2 2.1 3.2 5.1 4.48.71.31 1.27.49 1.7.63.71.22 1.36.19 1.87.12.57-.08 1.73-.71 1.97-1.39.24-.68.24-1.27.17-1.39-.07-.12-.27-.2-.56-.35Z"
      />
    </svg>
  ),
  telegram: (
    <svg viewBox="0 0 24 24" aria-hidden="true" width="20" height="20">
      <path
        fill="currentColor"
        d="M9.78 17.22 9.44 21c.48 0 .69-.2.94-.44l2.27-2.17 4.7 3.43c.86.48 1.48.23 1.71-.8l3.1-14.52c.31-1.31-.47-1.82-1.3-1.52L2.23 9.6c-1.27.5-1.25 1.21-.22 1.53l4.72 1.47 10.97-6.92c.52-.34.99-.15.6.2l-8.52 7.33Z"
      />
    </svg>
  ),
  vk: (
    <svg viewBox="0 0 24 24" aria-hidden="true" width="20" height="20">
      <path
        fill="currentColor"
        d="M12.78 17.38h1.24s.37-.04.56-.25c.18-.19.17-.55.17-.55s-.02-1.63.73-1.87c.74-.23 1.69 1.56 2.7 2.25.76.52 1.34.4 1.34.4l2.7-.04s1.41-.09.74-1.2c-.05-.09-.39-.83-2.03-2.35-1.72-1.6-1.49-1.34.58-4.1 1.26-1.67 1.77-2.7 1.61-3.14-.15-.42-1.08-.31-1.08-.31l-3.04.02s-.23-.03-.39.07c-.16.1-.27.33-.27.33s-.49 1.32-1.15 2.43c-1.39 2.36-1.94 2.48-2.17 2.34-.53-.35-.4-1.37-.4-2.1 0-2.27.34-3.22-.67-3.46-.34-.08-.58-.14-1.44-.15-1.11-.01-2.05 0-2.59.27-.36.18-.63.58-.46.6.2.03.66.13.9.47.32.43.31 1.4.31 1.4s.18 2.7-.43 3.04c-.42.24-1-.25-2.24-2.41-.63-1.11-1.11-2.33-1.11-2.33s-.09-.23-.25-.35c-.19-.14-.46-.19-.46-.19l-2.89.02s-.43.01-.59.2c-.14.17-.01.52-.01.52s2.26 5.3 4.83 7.97c2.35 2.44 5.02 2.28 5.02 2.28Z"
      />
    </svg>
  ),
  max: (
    <svg viewBox="0 0 24 24" aria-hidden="true" width="20" height="20">
      <path
        fill="currentColor"
        d="M4 4h3.2l4.8 7.4L16.8 4H20v16h-3V9.2l-4.5 6.8h-.9L7.1 9.2V20H4V4Z"
      />
    </svg>
  ),
  yandexBusiness: (
    <svg viewBox="0 0 24 24" aria-hidden="true" width="20" height="20">
      <path
        fill="currentColor"
        d="M13.4 2.3c-5 0-9.1 4.1-9.1 9.1 0 6.6 8.6 10.3 9 10.4.1.1.3.1.4 0 .4-.2 9-3.8 9-10.4 0-5-4.1-9.1-9.3-9.1ZM13.3 15a3.7 3.7 0 1 1 0-7.4 3.7 3.7 0 0 1 0 7.4Z"
      />
    </svg>
  ),
};

const ORDER = ["whatsapp", "telegram", "vk", "max", "yandexBusiness"];

export default function SocialLinks({
  keys = ORDER,
  variant = "default",
  className = "",
  links = SOCIAL_LINKS,
}) {
  const visible = keys
    .map((key) => ({ key, ...(links[key] || {}) }))
    .filter((entry) => entry.url);

  if (visible.length === 0) {
    return null;
  }

  return (
    <div className={`social-links social-links--${variant} ${className}`.trim()}>
      {visible.map((entry) => (
        <a
          key={entry.key}
          className="social-link"
          href={entry.url}
          rel="noopener noreferrer"
          target="_blank"
          aria-label={entry.label}
          title={entry.label}
        >
          <span className="social-link-icon">{ICONS[entry.key]}</span>
          <span className="social-link-label">{entry.label}</span>
        </a>
      ))}
    </div>
  );
}
