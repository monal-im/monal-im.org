{{- /* theme-toggle is enabled */}}
{{- if (not site.Params.disableThemeToggle) }}
{{- /* theme is light */}}
{{- if (eq site.Params.defaultTheme "light") }}
if (localStorage.getItem("pref-theme") === "dark") {
    document.body.classList.add('dark');
}
{{- /* theme is dark */}}
{{- else if (eq site.Params.defaultTheme "dark") }}
if (localStorage.getItem("pref-theme") === "light") {
    document.body.classList.remove('dark')
}
{{- else }}
{{- /* theme is auto */}}
if (localStorage.getItem("pref-theme") === "dark") {
    document.body.classList.add('dark');
} else if (localStorage.getItem("pref-theme") === "light") {
    document.body.classList.remove('dark')
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark');
}
{{- end }}
{{- /* theme-toggle is disabled and theme is auto */}}
{{- else if (and (ne site.Params.defaultTheme "light") (ne site.Params.defaultTheme "dark"))}}
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark');
}
{{- end }}