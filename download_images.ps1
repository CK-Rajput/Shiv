$images = @{
    "bfsi.jpg" = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
    "healthcare.jpg" = "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop"
    "railways.jpg" = "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?q=80&w=2070&auto=format&fit=crop"
    "retail.jpg" = "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop"
    "government.jpg" = "https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?q=80&w=2070&auto=format&fit=crop"
    "office.jpg" = "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
    "ai_brain.jpg" = "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop"
    "database.jpg" = "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop"
    "security_lock.jpg" = "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop"
    "chip.jpg" = "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
    "patient.jpg" = "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=2128&auto=format&fit=crop"
    "crowd.jpg" = "https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=2070&auto=format&fit=crop"
    "shop.jpg" = "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop"
    "facial_rec.jpg" = "https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=2070&auto=format&fit=crop"
    "pose.jpg" = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
    "people_count.jpg" = "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop"
    "security_cam.jpg" = "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2070&auto=format&fit=crop"
    "fiber_optic.jpg" = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
}

foreach ($name in $images.Keys) {
    $url = $images[$name]
    $path = "public/$name"
    Write-Host "Downloading $name..."
    try {
        Invoke-WebRequest -Uri $url -OutFile $path
    } catch {
        Write-Host "Failed to download $name"
    }
}
