import { Card, CardBody } from "./card";
import { Button } from "./button";
import cn from "../utils/cn";

const ColorScale = ({ colorName, className }: { colorName: string; className?: string }) => {
  const scales = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

  return (
    <div className={cn("space-y-2", className)}>
      <h4 className="text-sm font-medium capitalize">{colorName}</h4>
      <div className="grid grid-cols-5 gap-2">
        {scales.map(scale => (
          <div key={scale} className="space-y-1">
            <div
              className="h-12 w-full rounded border"
              style={{
                backgroundColor: `hsl(var(--${colorName}-${scale}))`,
              }}
            />
            <div className="text-xs text-center text-content3">{scale}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const ColorShowcase = () => {
  const semanticColors = [
    "default",
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
    "info",
  ];

  return (
    <div className="space-y-8 p-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">语义化颜色系统</h2>
        <p className="text-content3 mb-6">
          基于 HeroUI 标准的完整语义化颜色系统，支持 50-900 色阶和明暗模式。
        </p>
      </div>

      {/* Layout Colors */}
      <Card variant="bordered">
        <CardBody>
          <h3 className="text-lg font-semibold mb-4">布局颜色 (Layout Colors)</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <div
                className="h-12 w-full rounded border"
                style={{ backgroundColor: "hsl(var(--background))" }}
              />
              <div className="text-sm text-center">background</div>
            </div>
            <div className="space-y-2">
              <div
                className="h-12 w-full rounded"
                style={{ backgroundColor: "hsl(var(--foreground))" }}
              />
              <div className="text-sm text-center">foreground</div>
            </div>
            <div className="space-y-2">
              <div
                className="h-12 w-full rounded"
                style={{ backgroundColor: "hsl(var(--divider))" }}
              />
              <div className="text-sm text-center">divider</div>
            </div>
            <div className="space-y-2">
              <div
                className="h-12 w-full rounded"
                style={{ backgroundColor: "hsl(var(--focus))" }}
              />
              <div className="text-sm text-center">focus</div>
            </div>
          </div>
        </CardBody>
      </Card>

      {/* Content Colors */}
      <Card variant="bordered">
        <CardBody>
          <h3 className="text-lg font-semibold mb-4">内容颜色 (Content Colors)</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <div
                className="h-12 w-full rounded border"
                style={{ backgroundColor: "hsl(var(--content1))" }}
              />
              <div className="text-sm text-center">content1</div>
            </div>
            <div className="space-y-2">
              <div
                className="h-12 w-full rounded"
                style={{ backgroundColor: "hsl(var(--content2))" }}
              />
              <div className="text-sm text-center">content2</div>
            </div>
            <div className="space-y-2">
              <div
                className="h-12 w-full rounded"
                style={{ backgroundColor: "hsl(var(--content3))" }}
              />
              <div className="text-sm text-center">content3</div>
            </div>
            <div className="space-y-2">
              <div
                className="h-12 w-full rounded"
                style={{ backgroundColor: "hsl(var(--content4))" }}
              />
              <div className="text-sm text-center">content4</div>
            </div>
          </div>
        </CardBody>
      </Card>

      {/* Semantic Color Scales */}
      <Card variant="bordered">
        <CardBody>
          <h3 className="text-lg font-semibold mb-4">语义化颜色色阶 (Semantic Color Scales)</h3>
          <div className="space-y-6">
            {semanticColors.map(color => (
              <ColorScale key={color} colorName={color} />
            ))}
          </div>
        </CardBody>
      </Card>

      {/* Base Colors Demo */}
      <Card variant="bordered">
        <CardBody>
          <h3 className="text-lg font-semibold mb-4">基础语义化颜色 (Base Semantic Colors)</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {semanticColors.map(color => (
              <div key={color} className="space-y-2">
                <div
                  className="h-12 w-full rounded border flex items-center justify-center text-white font-medium text-sm"
                  style={{ backgroundColor: `hsl(var(--${color}))` }}
                >
                  {color}
                </div>
                <div className="text-xs text-center text-content3">{color}</div>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>

      {/* Button Examples */}
      <Card variant="bordered">
        <CardBody>
          <h3 className="text-lg font-semibold mb-4">按钮颜色示例 (Button Color Examples)</h3>
          <div className="space-y-4">
            {semanticColors.map(color => (
              <div key={color} className="space-y-2">
                <h4 className="text-sm font-medium capitalize">{color}</h4>
                <div className="flex flex-wrap gap-2">
                  <Button color={color as any} variant="solid" size="sm">
                    Solid
                  </Button>
                  <Button color={color as any} variant="bordered" size="sm">
                    Bordered
                  </Button>
                  <Button color={color as any} variant="light" size="sm">
                    Light
                  </Button>
                  <Button color={color as any} variant="flat" size="sm">
                    Flat
                  </Button>
                  <Button color={color as any} variant="faded" size="sm">
                    Faded
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>

      {/* Usage Examples */}
      <Card variant="bordered">
        <CardBody>
          <h3 className="text-lg font-semibold mb-4">使用示例 (Usage Examples)</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium mb-2">CSS 类名:</h4>
              <pre className="bg-content2 p-3 rounded text-sm overflow-x-auto">
                {`<!-- 基础颜色 -->
<div className="bg-primary text-primary-foreground">Primary background</div>
<div className="bg-success-100 text-success-900">Light success</div>

<!-- 色阶使用 -->
<div className="bg-primary-500 hover:bg-primary-600">Interactive button</div>
<div className="border-danger-300 text-danger-700">Error border</div>

<!-- 布局颜色 -->
<div className="bg-background text-foreground">Main content</div>
<div className="border-divider">Divider border</div>`}
              </pre>
            </div>

            <div>
              <h4 className="text-sm font-medium mb-2">CSS 变量:</h4>
              <pre className="bg-content2 p-3 rounded text-sm overflow-x-auto">
                {`/* 直接使用 CSS 变量 */
.custom-element {
  background-color: hsl(var(--primary-500));
  color: hsl(var(--primary-foreground));
  border: 1px solid hsl(var(--primary-300));
}

/* 色阶变量 */
.hover-effect:hover {
  background-color: hsl(var(--success-600));
}`}
              </pre>
            </div>
          </div>
        </CardBody>
      </Card>

      {/* Card and Button Integration Examples */}
      <Card variant="bordered">
        <CardBody>
          <h3 className="text-lg font-semibold mb-4">
            卡片和按钮集成示例 (Card & Button Integration)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {semanticColors.map(colorName => (
              <div key={colorName} className="space-y-4">
                <h4 className="font-medium capitalize text-center">{colorName} Theme</h4>

                {/* Light themed card with matching button */}
                <Card color={colorName as any} variant="light" className="p-4">
                  <div className="space-y-3">
                    <h5 className="font-medium">Light Card</h5>
                    <p className="text-sm opacity-80">Light variant with {colorName} theme.</p>
                    <Button color={colorName as any} variant="solid" size="sm" fullWidth>
                      Primary Action
                    </Button>
                  </div>
                </Card>

                {/* Bordered card with matching buttons */}
                <Card color={colorName as any} variant="bordered" className="p-4">
                  <div className="space-y-3">
                    <h5 className="font-medium">Bordered Card</h5>
                    <p className="text-sm opacity-80">Bordered variant with button combinations.</p>
                    <div className="flex gap-2">
                      <Button color={colorName as any} variant="bordered" size="sm">
                        Cancel
                      </Button>
                      <Button color={colorName as any} variant="solid" size="sm">
                        Confirm
                      </Button>
                    </div>
                  </div>
                </Card>

                {/* Faded card with bordered button */}
                <Card color={colorName as any} variant="faded" className="p-4">
                  <div className="space-y-3">
                    <h5 className="font-medium">Faded Card</h5>
                    <p className="text-sm opacity-80">Subtle faded style with bordered button.</p>
                    <Button color={colorName as any} variant="bordered" size="sm" fullWidth>
                      Bordered Action
                    </Button>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </div>
  );
};
