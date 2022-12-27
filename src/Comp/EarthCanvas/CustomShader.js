export const earthVertexShader = `
uniform vec3 sunDirection;
varying vec2 vUv;
varying vec3 vNormal;
varying vec4 vSunDirectionNorm;

void main() {
  vUv = uv;
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  vSunDirectionNorm = modelViewMatrix * vec4(sunDirection, 0.0);
  vNormal = normalMatrix * normal;
  gl_Position = projectionMatrix * mvPosition;
}
`;

export const earthFragmentShader = `
uniform sampler2D dayTexture;
uniform sampler2D nightTexture;

uniform vec3 sunDirection;

varying vec2 vUv;
varying vec3 vNormal;
varying vec4 vSunDirectionNorm;

void main( void ) {
  vec3 dayColor = texture2D( dayTexture, vUv ).rgb;
  vec3 nightColor = texture2D( nightTexture, vUv ).rgb;

  float intensity = 1.01 - dot(vNormal, vec3(0, 0, 1));

  vec3 atmosphere = vec3(0.3, 0.6, 1.0) * pow(intensity, 2.3);

  // compute cosine sun to normal so -1 is away from sun and +1 is toward sun.
  vec3 tempVec3 = vec3(vSunDirectionNorm.x, vSunDirectionNorm.y, vSunDirectionNorm.z);
  float cosineAngleSunToNormal = dot(normalize(vNormal), tempVec3);

  // sharpen the edge beween the transition
  cosineAngleSunToNormal = clamp( cosineAngleSunToNormal * 0.5, -1.0, 1.0);

  // convert to 0 to 1 for mixing
  float mixAmount = cosineAngleSunToNormal * 0.5 + 0.5;

  // Select day or night texture based on mix.
  vec3 color = mix( nightColor, dayColor, mixAmount );

  gl_FragColor = vec4( color + atmosphere, 1.0 );
}

`;

export const atmosphereVertexShader = `
    varying vec2 vertexUV;
    varying vec3 vertexNormal;

    void main() {
        vertexUV = uv;
        vertexNormal = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 0.95);
    }
`;

export const atmosphereFragmentShader = `
    varying vec3 vertexNormal;

    void main() {
        float intensity = pow(0.2 - dot(vertexNormal, vec3(0, 0, 1.0)), 1.0);

        gl_FragColor = vec4(0.3, 0.6, 1.0, 0.3) * intensity * 0.75;
    }

`;
