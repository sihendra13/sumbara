import { useRef, useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import { stats } from "./data";
import * as THREE from "three";
import "./Hero.css";

export default function HeroVariant4() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [showContent, setShowContent] = useState(false);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const textureRef = useRef(null);
  const timelineRef = useRef(0);
  const animationRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 1.2;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Video texture
    const video = document.createElement("video");
    video.src = "/petani-rumput-laut.mp4";
    video.loop = false;
    video.muted = true;
    video.playsInline = true;
    videoRef.current = video;

    const texture = new THREE.VideoTexture(video);
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.format = THREE.RGBFormat;
    textureRef.current = texture;

    // Geometry
    const geometry = new THREE.PlaneGeometry(16 / 9, 1, 32, 32);
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;

      // Video scrubbing
      const x = (e.clientX / window.innerWidth);
      const duration = video.duration || 1;
      const targetTime = x * duration;

      if (animationRef.current) cancelAnimationFrame(animationRef.current);

      const animate = () => {
        const diff = targetTime - timelineRef.current;
        const newTime = timelineRef.current + diff * 0.15;

        if (video.duration) {
          video.currentTime = newTime;
          timelineRef.current = newTime;

          const isNearEnd = newTime / video.duration > 0.85;
          setShowContent(isNearEnd);

          if (Math.abs(diff) > 0.01) {
            animationRef.current = requestAnimationFrame(animate);
          }
        }
      };

      animationRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Smooth rotation based on mouse
      mesh.rotation.y += (mouseX * 0.5 - mesh.rotation.y) * 0.05;
      mesh.rotation.x += (mouseY * 0.3 - mesh.rotation.x) * 0.05;

      renderer.render(scene, camera);
    };

    animate();
    video.play();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      containerRef.current?.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <section style={{ position: "relative", minHeight: "100vh", overflow: "hidden", background: "#000" }}>
      <div ref={containerRef} style={{ width: "100%", height: "100vh" }} />

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: "none",
        }}
      >
        <div
          className={`container hero__content ${showContent ? "hero__content--visible" : ""}`}
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            pointerEvents: "auto",
          }}
        >
          <div className="hero__eyebrow">
            <span className="hero__dot" />
            Bima, West Nusa Tenggara, Indonesia
          </div>

          <h1 className="hero__headline">
            Premium Indonesian<br />
            <em>Seaweed</em>, Export-Ready.
          </h1>

          <p className="hero__sub">
            Sustainably harvested from Bima's coastal waters — supplying
            carrageenan and alginate industries globally since 2015.
          </p>

          <div className="hero__actions">
            <a href="#inquiry" className="btn btn--primary">Request Sourcing Access</a>
            <a href="#products" className="btn btn--ghost">View Products</a>
          </div>

          <div className="hero__stats">
            {stats.map(s => (
              <div key={s.label} className="hero__stat">
                <span className="hero__stat-value">{s.value}</span>
                <span className="hero__stat-unit">{s.unit}</span>
                <span className="hero__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <a href="#products" className="hero__scroll" aria-label="Scroll down">
        <ArrowDown size={20} />
      </a>

      <div className="hero__hint">
        Move mouse to rotate and explore
      </div>
    </section>
  );
}
